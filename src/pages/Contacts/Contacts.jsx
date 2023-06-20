import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactsList';
import s from './Contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.conatcts_container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      {isLoading && !error && <b>Loading , please wait...</b>}
      {error ? (
        <b className={s.conatcts_error}>
          There was a request error, please try again or come back later!
        </b>
      ) : (
        <ContactsList />
      )}
    </div>
  );
};
