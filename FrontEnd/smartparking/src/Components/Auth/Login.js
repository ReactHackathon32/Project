import React, { useState, useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { dummyUser } from "../../Datas/User";
import { UserContext } from "../../App";

export const Login = () => {
  const contextData = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const verifyLogin = () => {
    dummyUser.map((user) => {
      if (user.email === email && user.password === password) {
        localStorage.setItem("login", true);
        contextData.loginAction(true);
        navigate("/dashboard/main", { replace: true });
      } else {
        console.log("false");
        setInvalidInput(true);
      }
    });
  };

  return (
    <React.Fragment>
      <Container>
        <div className="mt-5 pt-5 px-3 mx-auto form-input">
          <h2 className="text-center">MEMBER LOGIN</h2>
          <p className="text-center">
            Enter your email and password to access your account.
          </p>
          <Form>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Form.Control
              className="mt-3 mb-1"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {invalidInput === true ? (
              <div
                className="text-start"
                style={{ color: "red", fontSize: "0.9rem" }}
              >
                Invalid email / password. Please try again.
              </div>
            ) : null}

            <p className="text-end pb-2" style={{ fontSize: "0.9rem" }}>
              <Link to="/resetpassword">Forgot Password?</Link>
            </p>

            <div className="d-grid mt-3">
              <Button onClick={verifyLogin} variant="dark">
                LOGIN
              </Button>
            </div>
            <p className="text-center pt-5">
              Don't have an account? <Link to="/register">Register now</Link>
            </p>
          </Form>
        </div>
      </Container>
    </React.Fragment>
  );
};
