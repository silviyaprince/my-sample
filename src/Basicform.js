import React from "react";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import * as yup from 'yup';

const formValidationSchema = yup.object({
  email: yup
    .string()
    .max(20, "needed maximum of 12 characters")
    .required()
    .matches(/^[A-Z0-9.%+-]+@[A-Z0-9.+]+\.[A-Z].{2,}$/i,"enter valid email"),
  password: yup
    .string()
    .min(8, "too short")
    .max(12, "too long")
    .required()
    .matches(/^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[()]).{8,}$/,"enter a valid password"),
});

export function Basicform() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("submit", values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        id="email"
        name="email"
        value={formik.values.email}
        placeholder="email..."
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email&&formik.errors.email?formik.errors.email:""}
      <input
        type="password"
        id="password"
        name="password"
        value={formik.values.password}
        placeholder="password..."
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password&&formik.errors.password?formik.errors.password:""}
      <Button type="submit">SUBMIT</Button>
    </form>
  );
}
