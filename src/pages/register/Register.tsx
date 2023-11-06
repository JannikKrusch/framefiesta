import React, { useState } from "react";
import "./Register.css";
import { Button, Form } from "react-bootstrap";
import CustomButton from "../../components/shared/button/CustomButton";

function Register() {
  const [validated, setValidated] = useState(false);

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

    // Hier können Sie den Validierungsprozess fortsetzen, wenn alles korrekt ist
    setValidated(true);
    //TODO send data
    // Zum Beispiel das Senden der Daten an einen Server
  };

  return (
    <div className="d-flex justify-content-center register-container">
      <div className="col-sm-12 col-md-6 col-lg-4">
        <h1 className="headline">Registration</h1>
        <span className="subtext">Register for free</span>

        <Form
          className="text-start"
          noValidate
          validated={validated}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Form.Group controlId="validationUsername" className="form-group">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Username required
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
              isInvalid={password !== confirmPassword && validated}
            />
            <Form.Control.Feedback type="invalid">
              Password required
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
            />
            <Form.Control.Feedback type="invalid">
              Password must be identical
            </Form.Control.Feedback>
          </Form.Group>
          <div className="row g-0 text-end col-sm-12 col-md-4 ms-auto">
            <CustomButton
              label={"Register"}
              isActive={true}
              notLast={true}
              isSubit={true}
              //TODO add function
              method={() => {}}
            />
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
