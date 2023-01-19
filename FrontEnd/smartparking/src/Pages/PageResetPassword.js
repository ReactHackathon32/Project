import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { dummyUser } from "../Datas/User";
import { useNavigate } from "react-router-dom";
import { FaParking } from "react-icons/fa";
import { Link } from "react-router-dom";

export const PageResetPassword = () => {
  const navigate = useNavigate();

  const [resetEmail, setResetEmail] = useState("");
  const [resetPassword, setResetPassword] = useState("");
  const [confirmResetPassword, setConfirmResetPassword] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidConfirmPassword, setInvalidConfirmPassword] = useState(false);
  const [changePage, setChangePage] = useState(false);

  //TODO: validation check with database
  //TODO: PASSWORD CONFIRMATION, if password matches with db, navigate back to login

  const verifyExistingEmail = () => {
    dummyUser.map((user) => {
      if (user.email === resetEmail) {
        setChangePage(true);
      } else {
        setInvalidEmail(true);
      }
    });
  };

  const changePassword = () => {
    let errors = [];

    if (
      !resetPassword.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
      )
    ) {
      setInvalidPassword(true);
      errors.push("password");
    } else {
      setInvalidPassword(false);
    }

    if (resetPassword !== confirmResetPassword) {
      setInvalidConfirmPassword(true);
      errors.push("confirmPassword");
    } else {
      setInvalidConfirmPassword(false);
    }

    if (errors.length === 0) {
      navigate("/login", { replace: true, state: true });
    }
  };

  return (
    <React.Fragment>
      <Container>
        <div className="mt-5 pt-5 px-3 mx-auto form-input">
        <Link to="/"><div className="text-center mb-4" style={{ fontSize: '3.5rem', color: 'black'}} ><FaParking /></div></Link>
          <h2 className="text-center mb-5">FORGOT PASSWORD</h2>
          {changePage === true ? (
            <Form>
              <Form.Control
                type="password"
                name="resetPassword"
                placeholder="Enter new password"
                value={resetPassword}
                onChange={(e) => setResetPassword(e.target.value)}
              />
              {invalidPassword ? (
                <div
                  className="text-start"
                  style={{ color: "red", fontSize: "0.9rem" }}
                >
                  Invalid email / password. Please try again.
                </div>
              ) : null}
              <Form.Control
                className="mt-3 mb-1"
                type="password"
                name="confirmResetPassword"
                placeholder="Confirm new password"
                value={confirmResetPassword}
                onChange={(e) => setConfirmResetPassword(e.target.value)}
              />
              {invalidConfirmPassword ? (
                <div
                  className="text-start"
                  style={{ color: "red", fontSize: "0.9rem" }}
                >
                  Invalid email / password. Please try again.
                </div>
              ) : null}
              <div className="d-grid mt-3">
                <Button variant="dark" onClick={changePassword}>
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
              {invalidEmail ? (
                <div
                  className="text-start"
                  style={{ color: "red", fontSize: "0.9rem" }}
                >
                  Email entered is not found in the database
                </div>
              ) : null}
              <div className="d-grid mt-3">
                <Button variant="dark" onClick={verifyExistingEmail}>
                  RESET PASSWORD
                </Button>
              </div>
            </Form>
          )}
        </div>
      </Container>
    </React.Fragment>
  );
};
