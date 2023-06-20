import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoginIn } from 'redux/auth/selectors';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoginIn = useSelector(selectIsLoginIn);

  return isLoginIn ? <Navigate to={redirectTo} /> : Component;
};
