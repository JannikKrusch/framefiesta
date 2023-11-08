import React, { useContext, useState } from "react";
import CustomButton from "../../components/shared/button/CustomButton";
import { RouterPaths, ServiceContext } from "../../utils";
import { Form } from "react-bootstrap";
import "./Login.css";

function Login() {
  const [validated, setValidated] = useState(false);
  const [userIdentification, setUserIdentification] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [submitButtonLoading, setSubmitButtonLoading] =
    useState<boolean>(false);
  const { userService } = useContext(ServiceContext);

  async function handleSubmitAsync(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    // Hier können Sie den Validierungsprozess fortsetzen, wenn alles korrekt ist
    setValidated(true);
    setSubmitButtonLoading((prev) => !prev);
    //TODO send data
    const user = await userService?.loginAsync(userIdentification, password);

    console.warn("in handleSubmit", user);
    setSubmitButtonLoading((prev) => !prev);
  }

  return (
    <div className="d-flex justify-content-center login-container">
      <div className="col-sm-12 col-md-6 col-lg-4 col-12">
        <h1 className="headline">Login</h1>
        <span className="subtext">Login with your account</span>

        <Form
          className="text-start"
          noValidate
          validated={validated}
          onSubmit={async (e) => await handleSubmitAsync(e)}
        >
          <Form.Group
            controlId="validationUserIdentification"
            className="form-group"
          >
            <Form.Label>User identification</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Username or E-mail"
              value={userIdentification}
              onChange={(e) => setUserIdentification(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Email required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationPassword" className="form-group">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Password required
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-flex justify-content-between">
            <CustomButton
              label={`Don't have an account? ${RouterPaths.Register.display}`}
              isActive={false}
              notLast={false}
              isSubit={false}
              href={RouterPaths.Register.path}
            />
            <CustomButton
              label={`${RouterPaths.Login.display}`}
              isActive={true}
              notLast={false}
              isSubit={true}
              loading={submitButtonLoading}
            />
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
