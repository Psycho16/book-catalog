import './App.css';
import Header from './components/Header/Header.jsx';
import BookCard from './components/BookCard/BookCard';
import AddNewCard from './components/AddNewCard/AddNewCard';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" component={BookCard} />
            <Route path="/AddNedCard" component={AddNewCard} />
            {/* <Route path="/schedule" component={Schedule} /> */}
          </Switch>
          {/* <Link to="/">{<button>Главная</button>}</Link>
          <Link to="/AddNedCard">{<button>Добавить новую книгу</button>}</Link> */}
        </main>
        {/* <Route exact path="/portfolio">
          <AddNewCard />
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
