import React from 'react';
import styles from './LogIn.module.css';

const LogIn = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className={styles.login}>
      <div className={styles.login_wrapper}>
        <input
          placeholder="Логин"
          type="text"
          autoFocus
          required
          value={email}
          className={styles.input}
          onChange={(event) => setEmail(event.target.value)}
        />
        <p className={styles.error_message}>{emailError}</p>
        <input
          placeholder="Пароль"
          type="password"
          required
          value={password}
          className={styles.input}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p className={styles.error_message}>{passwordError}</p>
        <div className={styles.button_container}>
          {hasAccount ? (
            <>
              <button onClick={handleLogin} className={styles.button_log}>
                Войти
              </button>
              <p className={styles.button_container__text}>
                Нет аккаунта?
                <span
                  className={styles.button_container__span}
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Зарегистрируйтесь
                </span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp} className={styles.button_log}>
                Зарегистрироваться
              </button>
              <p className={styles.button_container__text}>
                Есть аккаунт?{' '}
                <span
                  className={styles.button_container__span}
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Войти
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LogIn;
