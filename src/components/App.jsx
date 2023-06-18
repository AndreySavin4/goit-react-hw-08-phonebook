import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactsList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Navigation } from 'pages/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Home } from 'pages/Home/Home';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route />
        </Route>
      </Routes>

      {/* <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      {isLoading && !error && <b>Loading , please wait...</b>}
      {error ? (
        <b>
          There was a request error, please try again or come back later Error(
          {error})
        </b>
      ) : (
        <ContactsList />
      )} */}
    </>
  );
};
