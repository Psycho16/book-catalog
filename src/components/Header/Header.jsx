import styles from './Header.module.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <Link to="/" className={styles.nav_button}>
          <h1 className={styles.header_title}>Books Library</h1>
        </Link>
        <Link to="/" className={styles.nav_button}>
          Главная
        </Link>
        <Link to="/AddNedCard" className={styles.nav_button}>
          Добавить книгу
        </Link>
      </nav>
      <Link to="/AuthPAge">
        <button className={styles.login_button}>Авторизация</button>
      </Link>
    </header>
  );
}
export default Header;
