import React, { useState } from "react";
import CustomButton from "../../components/shared/button/CustomButton";
import { RouterPaths } from "../../utils";
import { Form } from "react-bootstrap";
import "./Login.css";

function Login() {
  const [validated, setValidated] = useState(false);
  const [userIdentification, setUserIdentification] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    // Überprüfen Sie, ob das Formular gültig ist
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    // Hier können Sie den Validierungsprozess fortsetzen, wenn alles korrekt ist
    setValidated(true);
    //TODO send data
    // Zum Beispiel das Senden der Daten an einen Server
  };

  return (
    <div className="d-flex justify-content-center login-container">
      <div className="col-sm-12 col-md-6 col-lg-4 col-12">
        <h1 className="headline">Login</h1>
        <span className="subtext">Login with your account</span>

        <Form
          className="text-start"
          noValidate
          validated={validated}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Form.Group
            controlId="validationUserIdentification"
            className="form-group"
          >
            <Form.Label>Username or E-mail</Form.Label>
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
              method={() => {}}
              href={RouterPaths.Register.path}
            />
            <CustomButton
              label={`${RouterPaths.Login.display}`}
              isActive={true}
              notLast={false}
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

export default Login;
