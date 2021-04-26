import './BookCard.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { db, auth } from '../firebase';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import UpdateCard from '../UpdateCard/UpdateCard';

class BookCard extends React.Component {
  state = {
    Books: null,
  };
  // componentDidMount() {
  //   db.collection('Books')
  //     .get()
  //     .then((snapshot) => {
  //       const Books = [];
  //       snapshot.forEach((doc) => {
  //         const data = doc.data();
  //         Books.push(data);
  //       });
  //       this.setState({ Books: Books });
  //     })
  //     .catch((error) => console.log(error));
  // }
  componentDidMount() {
    db.collection('Books').onSnapshot((snapshot) => {
      const Books = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        Books.push(data);
      });
      this.setState({ Books: Books });
    });
  }
  DeleteCardData(iSBN) {
    console.log(iSBN);
    db.collection('Books').doc(iSBN).delete();
    // alert('Книга успешно удалена');
  }

  render() {
    return (
      this.state.Books &&
      this.state.Books.map((Books) => {
        return (
          <div className="book-card" key={Books.ISBN}>
            <h2 className="book-title">{Books.title}</h2>
            <h2 className="book-author">Автор: {Books.author}</h2>
            <h3 className="book-year">Дата выхода: {Books.date}</h3>
            <h3 className="book-ISBN">ISBN: {Books.ISBN}</h3>
            <div className="buttons">
              <button className="delete-button" onClick={() => this.DeleteCardData(Books.ISBN)}>
                Удалить
              </button>
              <Link
                // to="/UpdateCard"
                to={{
                  pathname: '/UpdateCard',
                  aboutProps: {
                    title: Books.title,
                    author: Books.author,
                    date: Books.date,
                    isbn: Books.ISBN,
                  },
                }}
                // className="update-button"
              >
                <button className="update-button">Обновить</button>
              </Link>
            </div>
          </div>
        );
      })
    );
  }
}

export default BookCard;
