import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';
import s from './RegisterForm.module.css';

const Schema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const Register = () => {
  const dispatch = useDispatch();
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  const onSubmit = (values, { resetForm }) => {
    dispatch(registerUser(values));
    resetForm();
  };

  return (
    <div className={s.form_container}>
      <h2>Register</h2>
      <Formik
        initialValues={initialState}
        validationSchema={Schema}
        onSubmit={onSubmit}
      >
        <Form className={s.form}>
          <div>
            <label className={s.formLabel}>
              Name
              <Field
                className={s.formInput}
                type="text"
                name="name"
                placeholder=" Enter your name"
              />
            </label>
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label className={s.formLabel}>
              Password
              <Field
                className={s.formInput}
                type="password"
                name="password"
                placeholder=" Enter your Password"
              />
            </label>
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label className={s.formLabel}>
              Email
              <Field
                className={s.formInput}
                type="email"
                name="email"
                placeholder=" Enter your Email"
              />
            </label>
            <ErrorMessage name="email" component="div" />
          </div>

          <button className={s.formButton} type="submit">
            Зарегистрироваться
          </button>
        </Form>
      </Formik>
    </div>
  );
};
