import './Header.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/" className="nav-button">
          <h1 className="header-title">Books Library</h1>
        </Link>
        <Link to="/" className="nav-button">
          Главная
        </Link>
        <Link to="/AddNedCard" className="nav-button">
          Добавить книгу
        </Link>
      </nav>
      <button className="login-button">Войти</button>
    </header>
  );
}
export default Header;
