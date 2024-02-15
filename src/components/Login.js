import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Required field"),
  password: yup
    .string()
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "Password should contain atleast, One UpperCase, One LowerCase, One number, One special character, and be between 6 to 16 characters"
    )
    .required("Required field"),
});

const Login = () => {
  return (
    <Container>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button type="submit">Login</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
