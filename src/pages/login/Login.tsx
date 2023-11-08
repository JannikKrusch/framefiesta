import React, { useContext, useState } from "react";
import CustomButton from "../../components/shared/button/CustomButton";
import { DataContext, RouterPaths, ServiceContext } from "../../utils";
import { Form } from "react-bootstrap";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [validated, setValidated] = useState(false);
  const [userIdentification, setUserIdentification] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUser } = useContext(DataContext);
  const { userService } = useContext(ServiceContext);
  const [isInvalid, setIsValid] = useState<boolean | undefined>(undefined);
  const navigate = useNavigate();

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

    setValidated(true);
    //TODO send data
    const user = await userService?.loginAsync(userIdentification, password);
    if (user) {
      setUser((prev) => user);
      setIsValid((prev) => false);
      setUser((prev) => user);
      navigate(RouterPaths.Default.path);
    } else {
      setIsValid((prev) => true);
    }
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
              isInvalid={isInvalid}
            />
            <Form.Control.Feedback type="invalid">
              {isInvalid === undefined
                ? "Username or E-mail required"
                : "User identification or password invalid"}
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
              isInvalid={isInvalid}
            />
            <Form.Control.Feedback type="invalid">
              {isInvalid === undefined
                ? "Password required"
                : "User identification or password invalid"}
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
              loading={true}
            />
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
