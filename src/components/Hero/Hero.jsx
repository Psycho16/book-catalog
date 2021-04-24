import React from 'react';
import './Hero.css';
const Hero = (props) => {
  return (
    <section className="hero">
      <nav>
        <h2>Вы авторизованы</h2>
        <button onClick={props.handleLogOut} className="button-log">
          Выйти
        </button>
      </nav>
    </section>
  );
};
export default Hero;
