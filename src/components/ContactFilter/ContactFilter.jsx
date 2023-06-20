import { useDispatch } from 'react-redux';
import css from './ContactFilter.module.css';
import { changeFilter } from 'redux/contacts/createSlice';

export const ContactFilter = () => {
  const dispach = useDispatch();
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        name="filter"
        type="text"
        onChange={event => {
          dispach(changeFilter(event.target.value));
        }}
      />
    </label>
  );
};
