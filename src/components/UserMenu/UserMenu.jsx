import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import s from './UserMenu.module.css';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={s.userContainer}>
      <p>
        Welcome:
        <b>{` ${user.email}`}</b>
      </p>
      <button
        className={s.button}
        onClick={() => dispatch(logOut())}
        type="button"
      >
        Logout
      </button>
    </div>
  );
};
