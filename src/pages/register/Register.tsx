import React, { useContext, useEffect, useState } from "react";
import "./Register.css";
import { Form } from "react-bootstrap";
import {
  DataContext,
  RouterPaths,
  ServiceContext,
  convertUserToUserFE,
  navigateToHome,
  useInternalServerErrorRedirect,
} from "../../utils";
import { CustomButton } from "../../components";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";

export function Register(): JSX.Element {
  const [validated, setValidated] = useState(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const { userService, sessionStorageService } = useContext(ServiceContext);
  const { setUser } = useContext(DataContext);
  const [showPassword, setShowPassword] = useState(false);

  const [isInvalid, setIsInvalid] = useState<boolean | undefined>(undefined);
  const [userNameEmptyInvalid, setUserNameEmptyInvalid] =
    useState<boolean>(false);
  const [userNameWhiteSpaceInvalid, setUserNameWhiteSpaceInvalid] =
    useState<boolean>(false);
  const [emailEmptyInvalid, setEmailEmptyInvalid] = useState<boolean>(false);
  const [passwordEmptyInvalid, setPasswordEmptyInvalid] =
    useState<boolean>(false);
  const [passwordWhiteSpaceInvalid, setPasswordWhiteSpaceInvalid] =
    useState<boolean>(false);

  const [passwordAndConfirmInvalid, setPasswordAndConfirmInvalid] =
    useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function handleSubmitAsync(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (name.length === 0) {
      setUserNameEmptyInvalid(true);
      setValidated(true);
      setIsInvalid(true);
    } else {
      setUserNameEmptyInvalid(false);
    }

    if (name.includes(" ")) {
      setUserNameWhiteSpaceInvalid(true);
      setValidated(true);
      setIsInvalid(true);
    } else {
      setPasswordEmptyInvalid(false);
    }

    if (email.length === 0) {
      setEmailEmptyInvalid(true);
      setValidated(true);
      setIsInvalid(true);
    } else {
      setEmailEmptyInvalid(false);
    }

    if (password.length === 0) {
      setPasswordEmptyInvalid(true);
      setValidated(true);
      setIsInvalid(true);
    } else {
      setPasswordEmptyInvalid(false);
    }

    if (password.includes(" ")) {
      setPasswordWhiteSpaceInvalid(true);
      setValidated(true);
      setIsInvalid(true);
    } else {
      setPasswordWhiteSpaceInvalid(false);
    }

    if (password !== confirmPassword) {
      setPasswordAndConfirmInvalid(true);
      setValidated(true);
      setIsInvalid(true);
    } else {
      setPasswordAndConfirmInvalid(false);
    }

    if (form.checkValidity() === false) {
      setValidated(true);
      setIsInvalid(true);
      return;
    }

    setValidated(true);
    const user = await userService?.registerAsync(name, password, email);
    if (user) {
      setIsInvalid(false);
      const userFE = convertUserToUserFE(user, password);
      setUser((prev) => userFE);
      sessionStorageService?.setUser(userFE);
      navigateToHome();
    } else {
      setIsInvalid(true);
    }
  }

  useEffect(() => {
    return () => {
      userService?.abortAllRequests();
    };
  }, []);

  useInternalServerErrorRedirect();

  return (
    <div className="d-flex justify-content-center register-container">
      <div className="col-sm-12 col-md-8 col-lg-4 col-12">
        <h1 className="headline">Registration</h1>
        <span className="subtext">Register for free</span>

        <Form
          className="text-start"
          noValidate
          validated={validated}
          onSubmit={async (e) => await handleSubmitAsync(e)}
        >
          <Form.Group controlId="validationUsername" className="form-group">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              isInvalid={userNameEmptyInvalid || userNameWhiteSpaceInvalid}
            />
            <Form.Control.Feedback type="invalid">
              {userNameEmptyInvalid
                ? "Username cannot be empty"
                : userNameWhiteSpaceInvalid
                ? "Username cannot have white space"
                : ""}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationEmail" className="form-group">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={isInvalid}
            />
            <Form.Control.Feedback type="invalid">
              {emailEmptyInvalid
                ? "E-Mail required"
                : isInvalid
                ? "E-Mail might be invalid"
                : ""}
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
              isInvalid={
                passwordEmptyInvalid ||
                passwordWhiteSpaceInvalid ||
                passwordAndConfirmInvalid
              }
            />
            {showPassword ? (
              <EyeSlashFill
                className={`register-password-icon ${
                  passwordEmptyInvalid ||
                  passwordWhiteSpaceInvalid ||
                  passwordAndConfirmInvalid
                    ? "invalid"
                    : ""
                }`}
                onClick={togglePasswordVisibility}
              />
            ) : (
              <EyeFill
                className={`register-password-icon ${
                  passwordEmptyInvalid ||
                  passwordWhiteSpaceInvalid ||
                  passwordAndConfirmInvalid
                    ? "invalid"
                    : ""
                }`}
                onClick={togglePasswordVisibility}
              />
            )}
            <Form.Control.Feedback type="invalid">
              {passwordEmptyInvalid
                ? "Password cannot be empty"
                : passwordWhiteSpaceInvalid
                ? "Password cannot have white space"
                : passwordAndConfirmInvalid
                ? "Passwords must be identical"
                : ""}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            controlId="validationConfirmPassword"
            className="form-group"
          >
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Repeat Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              isInvalid={isInvalid}
            />
            <Form.Control.Feedback type="invalid">
              Password must be identical
            </Form.Control.Feedback>
          </Form.Group>
          <div className="d-flex justify-content-between flex-sm-row flex-column">
            <CustomButton
              label={`Got an account? ${RouterPaths.Login.display}`}
              href={RouterPaths.Login.path}
            />
            <CustomButton
              label={`${RouterPaths.Register.display}`}
              active
              isSubmit
            />
          </div>
        </Form>
      </div>
    </div>
  );
}
