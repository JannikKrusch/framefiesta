import React, { useContext, useEffect, useState } from "react";
import {
  DataContext,
  RouterPaths,
  ServiceContext,
  convertUserToUserFE,
  navigateToHome,
  useInternalServerErrorRedirect,
} from "../../utils";
import { Form } from "react-bootstrap";
import "./Login.css";
import { CustomButton } from "../../components";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";

export function Login(): JSX.Element {
  const [validated, setValidated] = useState(false);
  const [userIdentification, setUserIdentification] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUser } = useContext(DataContext);
  const { userService, sessionStorageService } = useContext(ServiceContext);
  const [isInvalid, setIsvalid] = useState<boolean>(false);
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility(): void {
    setShowPassword(!showPassword);
  }

  async function handleSubmitAsync(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      setIsvalid(true);
      return;
    }
    setValidated(true);

    setSubmitLoading(true);
    const user = await userService?.loginAsync(userIdentification, password);
    if (user) {
      const userFE = convertUserToUserFE(user, password);
      setUser((prev) => userFE);
      setIsvalid((prev) => false);
      sessionStorageService?.setUser(userFE);
      setSubmitLoading(false);
      navigateToHome();
    } else {
      setIsvalid((prev) => true);
      setSubmitLoading(false);
    }
  }

  useEffect(() => {
    return () => {
      userService?.abortAllRequests();
    };
  }, []);

  useInternalServerErrorRedirect();

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

          <Form.Group
            controlId="validationPassword"
            className="form-group position-relative"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={isInvalid}
            />
            {showPassword ? (
              <EyeSlashFill
                className={`login-password-icon ${isInvalid ? "invalid" : ""}`}
                onClick={togglePasswordVisibility}
              />
            ) : (
              <EyeFill
                className={`login-password-icon ${isInvalid ? "invalid" : ""}`}
                onClick={togglePasswordVisibility}
              />
            )}
            <Form.Control.Feedback type="invalid">
              {isInvalid === undefined
                ? "Password required (at least 10 chars)"
                : "User identification or password invalid"}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-flex justify-content-between flex-sm-row flex-column">
            <CustomButton
              label={`Don't have an account? ${RouterPaths.Register.display}`}
              href={RouterPaths.Register.path}
            />
            <CustomButton
              label={`${RouterPaths.Login.display}`}
              active
              isSubmit
              loading={submitLoading}
            />
          </div>
        </Form>
      </div>
    </div>
  );
}
