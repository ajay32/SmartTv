import * as yup from 'yup';

export const fromSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid Email')
    .required('Email is required'),

  // username: yup
  //   .string()
  //   .required('Username is required')
  //   .min(5, 'Username must be at least 5 characters'),
    
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

// dont add a rule for a proprety that does not exisit in a form otherwise submit button will not work