import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import css from './ContactForm.module.css';
import { selectContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const dispach = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    const form = evt.target;
    evt.preventDefault();
    if (
      contacts.some(
        item =>
          item.name.toLowerCase() ===
          form.elements.name.value.toLowerCase().trim()
      )
    ) {
      return toast('Already exists in our databases!');
    } else {
      dispach(
        addNewContact({
          id: nanoid(),
          name: form.elements.name.value,
          number: form.elements.number.value,
        })
      );
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.formLabel}>
        Name
        <input
          className={css.formImput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.formLabel}>
        Number
        <input
          className={css.formImput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.formButton}>Add contact</button>
      <Toaster />
    </form>
  );
};
