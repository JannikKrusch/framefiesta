import React, { useContext, useState } from "react";
import "./Register.css";
import { Form } from "react-bootstrap";
import CustomButton from "../../components/shared/button/CustomButton";
import { DataContext, RouterPaths, ServiceContext } from "../../utils";
import { useNavigate } from "react-router-dom";

function Register() {
  const [validated, setValidated] = useState(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const { userService } = useContext(ServiceContext);
  const { setUser } = useContext(DataContext);
  const [isInvalid, setIsValid] = useState<boolean | undefined>(undefined);
  const navigate = useNavigate();

  async function handleSubmitAsync(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    event.stopPropagation();

    // Überprüfen Sie, ob das Formular gültig ist
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    setValidated(true);
    const user = await userService?.registerAsync(name, password, email);
    if (user) {
      setIsValid(false);
      setUser((prev) => user);
      navigate(RouterPaths.Default.path);
    } else {
      setIsValid(true);
    }
  }

  return (
    <div className="d-flex justify-content-center register-container">
      <div className="col-sm-12 col-md-6 col-lg-4 col-12">
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
              isInvalid={isInvalid}
            />
            <Form.Control.Feedback type="invalid">
              {isInvalid === undefined
                ? "Username required"
                : "Username might be invalid"}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationEmail" className="form-group">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={isInvalid}
            />
            <Form.Control.Feedback type="invalid">
              {isInvalid === undefined
                ? "E-Mail required"
                : "E-Mail might be invalid"}
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
              isInvalid={validated}
            />
            <Form.Control.Feedback type="invalid">
              {isInvalid === undefined ? "Password required" : ""}
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
              isInvalid={password !== confirmPassword}
            />
            <Form.Control.Feedback type="invalid">
              Password must be identical
            </Form.Control.Feedback>
          </Form.Group>
          <div className="d-flex justify-content-between">
            <CustomButton
              label={`Got an account already? ${RouterPaths.Login.display}`}
              active={false}
              notLast={false}
              isSubit={false}
              method={() => {}}
              href={RouterPaths.Login.path}
            />
            <CustomButton
              label={`${RouterPaths.Register.display}`}
              active={true}
              notLast={false}
              isSubit={true}
            />
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
