import React, { useContext, useEffect, useState } from "react";
import CustomButton from "../../components/shared/button/CustomButton";
import {
  DataContext,
  HttpStatusCodes,
  RouterPaths,
  ServiceContext,
  StateContext,
} from "../../utils";
import { Form } from "react-bootstrap";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login(): JSX.Element {
  const [validated, setValidated] = useState(false);
  const [userIdentification, setUserIdentification] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUser } = useContext(DataContext);
  const { userService, sessionStorageService } = useContext(ServiceContext);
  const { error } = useContext(StateContext);
  const [isInvalid, setIsValid] = useState<boolean | undefined>(undefined);
  const navigate = useNavigate();
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);

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
    setSubmitLoading(true);
    const user = await userService?.loginAsync(userIdentification, password);
    if (user) {
      setUser((prev) => user);
      setIsValid((prev) => false);
      setUser((prev) => user);
      sessionStorageService?.setUser(user);
      setSubmitLoading(false);
      navigate(RouterPaths.Default.path);
    } else {
      setIsValid((prev) => true);
      setSubmitLoading(false);
    }
  }

  useEffect(() => {
    if (error?.statusCode === HttpStatusCodes.InternalServerError) {
      navigate(RouterPaths.Error.path);
    }
  }, [error, navigate]);

  return (
    <div className="d-flex justify-content-center login-container">
      <div className="col-sm-12 col-md-8 col-lg-4 col-12">
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
              placeholder="Name or E-mail"
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
              minLength={10}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={isInvalid}
            />
            <Form.Control.Feedback type="invalid">
              {isInvalid === undefined
                ? "Password required (at least 10 chars)"
                : "User identification or password invalid"}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-flex justify-content-between flex-sm-row flex-column">
            <CustomButton
              label={`Don't have an account? ${RouterPaths.Register.display}`}
              active={false}
              notLast={false}
              isSubit={false}
              href={RouterPaths.Register.path}
            />
            <CustomButton
              label={`${RouterPaths.Login.display}`}
              active={true}
              notLast={false}
              isSubit={true}
              loading={submitLoading}
            />
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
