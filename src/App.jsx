import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'pages/Navigations/Navigations';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { Register } from 'pages/RegisterForm/RegisterForm';
import { Login } from 'pages/Login/Login';
import { Home } from 'pages/Home/Home';
import { Contacts } from 'pages/Contacts/Contacts';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';
import { selectRefreshing } from 'redux/auth/selectors';

export const App = () => {
  const isRefreshing = useSelector(selectRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />

          <Route
            path="register"
            element={<PublicRoute redirectTo="/" component={<Register />} />}
          />

          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/contacts" component={<Login />} />
            }
          />

          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    )
  );
};
