// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, FormGroup, Label, Alert } from "reactstrap";
import PortInput from "../form/PortInput";

const validateInputs = values => {
  let errors = {};

  Object.entries(values).forEach(([key, value]) => {
    if (!values[key]) {
      errors[key] = `Field ${key} is required!`;
    }
  });

  /*--------------------------- */
};

const INITIAL_VALUES = {
  title: "",
  position: "",
  description: "",
  technology: ""
};

const PortfolioCreateForm = props => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            type="text"
            name="title"
            label="Title"
            className="form-control"
            component={PortInput}
          />
          <Field
            type="text"
            name="technology"
            label="technology"
            className="form-control"
            component={PortInput}
          />
          <Field
            type="text"
            name="position"
            label="Position"
            className="form-control"
            component={PortInput}
          />
          <Field
            type="textarea"
            name="description"
            label="Description"
            component="textarea"
            className="form-control"
            component={PortInput}
          />

          {props.error && <Alert color="danger">{props.error}</Alert>}

          <Button
            color="success"
            size="lg"
            type="submit"
            disabled={isSubmitting}
          >
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;
