import s from './Home.module.css';
export const Home = () => {
  return (
    <div className={s.home_container}>
      <h1>Hello user!</h1>
      <p className={s.home_page}>
        You are on the contact book site where you can create, delete and fit
        your contacts.
      </p>
      <p>
        <b>
          If you are not Registered, go to the Register section if an account
          has already been created Login.
        </b>
      </p>
    </div>
  );
};
