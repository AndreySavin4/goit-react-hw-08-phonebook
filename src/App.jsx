import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigation } from 'pages/Navigations/Navigations';
import { Route, Routes } from 'react-router-dom';
import { RefreshUser } from 'redux/auth/operations';
import { Register } from 'pages/RegisterForm/RegisterForm';
import { Login } from 'pages/Login/Login';
import { Home } from 'pages/Home/Home';
import { Contacts } from 'pages/Contacts/Contacts';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RefreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
          <Route />
        </Route>
      </Routes>
    </>
  );
};
