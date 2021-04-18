import './BookCard.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { db, auth } from '../firebase';

class BookCard extends React.Component {
  state = {
    Books: null,
  };
  componentDidMount() {
    db.collection('Books')
      .get()
      .then((snapshot) => {
        const Books = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          Books.push(data);
        });
        this.setState({ Books: Books });
      })
      .catch((error) => console.log(error));
  }
  DeleteCardData(iSBN) {
    db.collection('Books').doc(iSBN).delete();
    alert('Книга успешно удалена');
  }

  render() {
    return (
      this.state.Books &&
      this.state.Books.map((Books) => {
        return (
          <div className="book-card" key={Books.ISBN}>
            <h2 className="book-title">Название: {Books.title}</h2>
            <h2 className="book-author">Автор: {Books.author}</h2>
            <h3 className="book-year">Дата выхода: {Books.date}</h3>
            <h3 className="book-ISBN">ISBN: {Books.ISBN}</h3>
            <button className="delete-button" onClick={() => this.DeleteCardData(Books.ISBN)}>
              Удалить
            </button>
          </div>
        );
      })
    );
  }
}

export default BookCard;
