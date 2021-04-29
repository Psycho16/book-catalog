import React from 'react';
import styles from './Hero.module.css';
const Hero = (props) => {
  return (
    <section className={styles.hero}>
      <nav>
        <h2>Вы авторизованы</h2>y
        <button onClick={props.handleLogOut} className={styles.button_log}>
          Выйти
        </button>
      </nav>
    </section>
  );
};
export default Hero;
