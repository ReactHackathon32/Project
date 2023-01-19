import React, {useContext} from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { UserContext } from "../../App";
import { FaParking } from "react-icons/fa";

export const Register = () => {
  const contextData = useContext(UserContext);
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const updateFormField = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // FORM VALIDATION
  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidConfirmPassword, setInvalidConfirmPassword] = useState(false);

  const register = async () => {
    let errors = [];

    if (
      !formState.firstName.match(/^[A-Za-z]+( [A-Za-z]+)*$/) ||
      formState.firstName.length < 3
    ) {
      setInvalidName(true);
      errors.push("firstName");
    } else {
      setInvalidName(false);
    }

    if (
      !formState.lastName.match(/^[A-Za-z]+( [A-Za-z]+)*$/) ||
      formState.firstName.length < 2
    ) {
      setInvalidName(true);
      errors.push("lastName");
    } else {
      setInvalidName(false);
    }

    if (!formState.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      setInvalidEmail(true);
      errors.push("email");
    } else {
      setInvalidEmail(false);
    }

    // TODO: Comment out for testing
    // if (
    //   !formState.password.match(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
    //   )
    // ) {
    //   setInvalidPassword(true);
    //   errors.push("password");
    // } else {
    //   setInvalidPassword(false);
    // }

    if (formState.password !== formState.confirmPassword) {
      setInvalidConfirmPassword(true);
      errors.push("confirmPassword");
    } else {
      setInvalidConfirmPassword(false);
    }

    // if no errors, link to dashboard
    if (errors.length === 0) {
        localStorage.setItem("login", true);
        contextData.loginAction(true);
      navigate("/dashboard/main", {replace: true});
    }

    // console.log(formState.firstName, formState.lastName, formState.email, formState.password)
    console.log('errors', errors);
  };

  return (
    <React.Fragment>
      <Container>
        <div className="mt-5 pt-5 px-3 mx-auto form-input">
        <Link to="/"><div className="text-center mb-4" style={{ fontSize: '3.5rem', color: 'black'}} ><FaParking /></div></Link>

          <h2 className="text-center">REGISTER</h2>
          <p className="text-center">Create your account. It's free and only takes a minute.</p>
          <Form>
            <div className="d-flex">
              <Form.Control
                className="me-2"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formState.firstName}
                onChange={updateFormField}
              />
              <Form.Control
                className="ms-2"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formState.lastName}
                onChange={updateFormField}
              />
            </div>
            {invalidName === true ? (
              <div
                style={{ fontSize: "0.9rem", textAlign: "left", color: "red" }}
              >
                Invalid first and/or last name
              </div>
            ) : null}

            <Form.Control
              className="mt-3"
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={updateFormField}
            />
            {invalidEmail === true ? (
              <div
                style={{ fontSize: "0.9rem", textAlign: "left", color: "red" }}
              >
                Invalid email
              </div>
            ) : null}

            <Form.Control
              className="mt-3"
              type="password"
              name="password"
              placeholder="Password"
              value={formState.password}
              onChange={updateFormField}
            />
            {invalidPassword === true ? (
              <div
                style={{ fontSize: "0.9rem", textAlign: "left", color: "red" }}
              >
                Invalid password
              </div>
            ) : null}

            <Form.Control
              className="mt-3"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formState.confirmPassword}
              onChange={updateFormField}
            />
            {invalidConfirmPassword === true ? (
              <div
                style={{ fontSize: "0.9rem", textAlign: "left", color: "red" }}
              >
                Passwords do not match
              </div>
            ) : null}

            <div className="d-grid mt-3">
              <Button variant="dark" onClick={register}>
                REGISTER
              </Button>
            </div>
            <p className="text-center pt-5">
              Already have an account? <Link to="/login">Login now</Link>
            </p>
          </Form>
        </div>
      </Container>
    </React.Fragment>
  );
};
