import * as yup from 'yup';

export const forgotPasswordSchema = 
  yup.object().shape({
    email: 
      yup.string()
      .email("Error: Email is bad formatted!")
      .required("Enter a valid e-mail!"),
});