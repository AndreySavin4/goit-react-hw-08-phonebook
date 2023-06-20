import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operations';
import s from './Login.module.css';
import { Link } from 'react-router-dom';

const Schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const Login = () => {
  const dispatch = useDispatch();
  const initialState = {
    email: '',
    password: '',
  };

  const onSubmit = values => {
    dispatch(loginUser(values));
  };

  return (
    <div className={s.form_container}>
      <h2>Login </h2>
      <Formik
        initialValues={initialState}
        validationSchema={Schema}
        onSubmit={onSubmit}
      >
        <Form className={s.form}>
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

          <button className={s.formButton} type="submit">
            Войти
          </button>
        </Form>
      </Formik>
      <p>
        No account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};
