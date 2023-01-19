import React, { useState, useContext, useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import { FaParking } from "react-icons/fa";
import { postLogin } from "../../API/postLogin";

export const Login = ({ setUserDetails }) => {
  const contextData = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const fromReset = location.state;
  const [show, setShow] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);
  const [loginResult, setLoginResult] = useState({})
  const [loginStatus, setLoginStatus] = useState()
  const [curToken, setCurToken] = useState()
  const [curUserId, setCurUserId] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const loginHandler = () => {
    postLogin(email, password)
      .then((response) => {
        setLoginResult(response.data)
        setLoginStatus(response.data.status)
        setCurToken(response.data.sessionToken)
        setCurUserId(response.data.userId)
      })
      .catch(error => {
        console.log("Error fetching data: ", error);
      })
      .finally(() => {
        setIsLoading(false)
      })
  };

  useEffect(() => {
    verifyLogin()
  }, [loginResult])

  const verifyLogin = async () => {
    if (loginStatus === 'success') {
      localStorage.setItem("login", true);
      localStorage.setItem("token", curToken)
      localStorage.setItem("userId", curUserId)
      contextData.loginAction(true);
      navigate("/dashboard/main");
    } else if (loginStatus === 'invalid username/password') {
      console.log("invalid username/password");
      setInvalidInput(true);
    } else {
      console.log("initial render");
    }
  }

  return (
    <React.Fragment>
      <Container>
        {fromReset && show && (
          <Alert className='m-3' variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Password has been reset successfully!</Alert.Heading>
          </Alert>
        )}
        <div className="mt-5 pt-5 px-3 mx-auto form-input">
          <Link to="/"><div className="text-center mb-4" style={{ fontSize: '3.5rem', color: 'black' }} ><FaParking /></div></Link>

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
              <Button onClick={loginHandler} variant="dark">
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
