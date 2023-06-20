import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoginIn } from 'redux/auth/selectors';
import s from './NavToApp.module.css';

export const NavToApp = () => {
  const isLoginIn = useSelector(selectIsLoginIn);
  return (
    <div className={s.container}>
      <Link className={s.link} to="/">
        Homepage
      </Link>
      {isLoginIn && (
        <Link className={s.link} to="/contacts">
          Contacts
        </Link>
      )}
    </div>
  );
};
