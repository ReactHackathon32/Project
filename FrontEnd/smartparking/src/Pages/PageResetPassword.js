import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export const PageResetPassword = () => {
  const [resetEmail, setResetEmail] = useState("");
  const [resetPassword, setResetPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  //TODO: validation check with database
  //TODO: PASSWORD CONFIRMATION, if password matches with db, navigate back to login

  return (
    <React.Fragment>
      <Container>
        <div className="mt-5 pt-5 px-3 mx-auto form-input">
          <h2 className="text-center mb-5">RESET PASSWORD</h2>
          {isValid ? (
            <Form>
              <Form.Control
                type="password"
                name="resetPassword"
                placeholder="Enter your new password"
                value={resetPassword}
                onChange={(e) => setResetPassword(e.target.value)}
              />
              <div className="d-grid mt-3">
                <Button variant="dark" onClick="">
                  CHANGE PASSWORD
                </Button>
              </div>
            </Form>
          ) : (
            <Form>
              <Form.Control
                type="email"
                name="resetEmail"
                placeholder="Enter your existing email account"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
              <div className="d-grid mt-3">
                <Button
                  variant="dark"
                  onClick={() => {
                    setIsValid(true);
                  }}
                >
                  RESET PASSWORD
                </Button>
              </div>
              {/* if resetEmail entered is not equal to email found in database, show validation error. Else, show password input */}
            </Form>
          )}
        </div>
      </Container>
    </React.Fragment>
  );
};
