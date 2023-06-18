import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { RegisterUser } from 'redux/auth/operations';

const Schema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const Register = () => {
  const dispatch = useDispatch();
  const initialState = {
    email: '',
    name: '',
    password: '',
  };

  const onSubmit = (values, { resetForm }) => {
    dispatch(RegisterUser(values));
    // resetForm();
  };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={Schema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label>
            Name
            <Field type="text" name="name" placeholder=" Enter your name" />
          </label>
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label>
            Password
            <Field
              type="password"
              name="password"
              placeholder=" Enter your Password"
            />
          </label>
          <ErrorMessage name="password" component="div" />
        </div>
        <div>
          <label>
            Email
            <Field type="email" name="email" placeholder=" Enter your Email" />
          </label>
          <ErrorMessage name="email" component="div" />
        </div>

        <button type="submit">Зарегистрироваться</button>
      </Form>
    </Formik>
  );
};
