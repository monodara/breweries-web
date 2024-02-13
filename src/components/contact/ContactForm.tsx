import { Box, TextField, Button } from "@mui/material";
import { object, string } from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ContactInfo } from "../../misc/type";

import "./ContactForm.css";

const questionSchema = object().shape({
  name: string().min(2, "Too Short!").max(20, "Too Long!").required("Required"),
  phoneNumber: string()
    .matches(/^[0-9]*$/, "Phone number only contains numbers")
    .min(11, "Too short!")
    .max(12, "Too long!")
    .required("Required"),
  email: string().email("Invalid email").required("Required"),
  question: string().required("Required"),
});
const initialValues = {
  name: "",
  phoneNumber: "",
  email: "",
  question: "",
};

export default function ContactForm() {
  const handleSubmit = (values: ContactInfo) => {
    alert("Your message has been sent. Thank you very much!");
  };
  return (
    <div className="container">
      <h2>Contact Form</h2>
      <Formik
        style={{ width: "100%" }}
        initialValues={initialValues}
        validationSchema={questionSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form style={{ width: "100%" }}>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                margin: "0 auto", // Horizontally center the form fields and button
              }}
            >
              <Field
                as={TextField}
                fullWidth
                label="Name"
                id="name"
                name="name"
                error={errors.name && touched.name}
                helperText={<ErrorMessage name="name" />}
              />
              <Field
                as={TextField}
                fullWidth
                label="Phone Number"
                id="phoneNumber"
                name="phoneNumber"
                error={errors.phoneNumber && touched.phoneNumber}
                helperText={<ErrorMessage name="phoneNumber" />}
              />
              <Field
                as={TextField}
                fullWidth
                label="Email"
                id="email"
                name="email"
                error={errors.email && touched.email}
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                fullWidth
                label="Questions & Suggestions"
                id="question"
                name="question"
                error={errors.question && touched.question}
                helperText={<ErrorMessage name="question" />}
              />
              <Button
                variant="contained"
                type="submit"
                style={{ display: "block", margin: "20px auto" }}
              >
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
}
