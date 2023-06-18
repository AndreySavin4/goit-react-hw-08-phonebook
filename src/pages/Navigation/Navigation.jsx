import { Link, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Домамшняя страница</Link>
          <Link to="/register">Регистрация</Link>
          <Link to="/login">Вход</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
