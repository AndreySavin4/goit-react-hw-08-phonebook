import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoginIn } from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const isLoginIn = useSelector(selectIsLoginIn);

  return !isLoginIn ? <Navigate to={redirectTo} /> : Component;
};
