import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

export const Register = () => {
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
    }

    if (
      !formState.lastName.match(/^[A-Za-z]+( [A-Za-z]+)*$/) ||
      formState.firstName.length < 2
    ) {
      setInvalidName(true);
      errors.push("lastName");
    }

    if (
      !formState.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      setInvalidEmail(true);
      errors.push("email");
    }

    if (
      !formState.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
      )
    ) {
      setInvalidPassword(true);
      errors.push("password");
    }

    if (formState.password !== formState.confirmPassword) {
      setInvalidConfirmPassword(true);
      errors.push("confirmPassword");
    }
    // if no errors, link to dashboard

    
    console.log(errors);
  };

  return (
    <React.Fragment>
      <Container>
        <div className="mt-5 pt-5 px-3 mx-auto form-input">
          <h2>REGISTER</h2>
          <p>Create your account. It's free and only takes a minute.</p>
          <Form className="pt-3">
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
                Invalid first and last name
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
                SIGN UP
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