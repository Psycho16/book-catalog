import React from 'react';
import './LogIn.css';

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
    <section className="login">
      <div className="login-wrapper">
        <input
          placeholder="Логин"
          type="text"
          autoFocus
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <p className="error-message">{emailError}</p>
        <input
          placeholder="Пароль"
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p className="error-message">{passwordError}</p>
        <div className="button-container">
          {hasAccount ? (
            <>
              <button onClick={handleLogin} className="button-log">
                Войти
              </button>
              <p className="button-container__text">
                Нет аккаунта?
                <span className="button-container__span" onClick={() => setHasAccount(!hasAccount)}>
                  Зарегистрируйтесь
                </span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp} className="button-log">
                Зарегистрироваться
              </button>
              <p className="button-container__text">
                Есть аккаунт?{' '}
                <span className="button-container__span" onClick={() => setHasAccount(!hasAccount)}>
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
