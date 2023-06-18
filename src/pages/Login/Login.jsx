import { useState } from 'react';

export const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'password':
        return setPassword(e.currentTarget.value);
      case 'email':
        return setEmail(e.currentTarget.value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button>Зарегистрироваться</button>
    </form>
  );
};
