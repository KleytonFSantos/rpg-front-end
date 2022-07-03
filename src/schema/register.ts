import * as yup from 'yup';

export const registerSchema = 
  yup.object().shape({
    userName: yup.string()
      .required("User name is required")
      .min(3, "User name must be at least 3 characters"),
    email: 
      yup.string()
      .email()
      .required("Email is required"),
    password: 
      yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: 
      yup.string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
});