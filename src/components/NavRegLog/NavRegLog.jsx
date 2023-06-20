import { Link } from 'react-router-dom';
import s from './NavRegLog.module.css';
export const NavRegLog = () => {
  return (
    <div className={s.authContainer}>
      <Link className={s.auth_button} to="/register">
        Register
      </Link>
      <Link className={s.auth_button} to="/login">
        Login
      </Link>
    </div>
  );
};
