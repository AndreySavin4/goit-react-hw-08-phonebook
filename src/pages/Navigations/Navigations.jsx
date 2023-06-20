import { Outlet } from 'react-router-dom';
import { NavToApp } from 'components/NavToApp/NavToApp';
import { NavRegLog } from 'components/NavRegLog/NavRegLog';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoginIn } from 'redux/auth/selectors';
import s from './Navigations.module.css';

export const Navigation = () => {
  const isLoginIn = useSelector(selectIsLoginIn);
  return (
    <>
      <header className={s.header}>
        <NavToApp />
        {isLoginIn ? <UserMenu /> : <NavRegLog />}
      </header>
      <Outlet />
    </>
  );
};
