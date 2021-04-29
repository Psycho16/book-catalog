import styles from './BookCard.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { db, auth } from '../firebase';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import UpdateCard from '../UpdateCard/UpdateCard';

class BookCard extends React.Component {
  // _isMounted = false;
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
    // this._isMounted = true;
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
    db.collection('Books').doc(iSBN).delete();
  }

  render() {
    return (
      this.state.Books &&
      this.state.Books.map((Books) => {
        return (
          <div className={styles.book_card} key={Books.ISBN}>
            <h2 className={styles.book_title}>{Books.title}</h2>
            <h2 className={styles.book_author}>Автор: {Books.author}</h2>
            <h3 className={styles.book_year}>Дата выхода: {Books.date}</h3>
            <h3 className={styles.book_ISBN}>ISBN: {Books.ISBN}</h3>
            <div className={styles.buttons}>
              <button
                className={styles.delete_button}
                onClick={() => this.DeleteCardData(Books.ISBN)}
              >
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
                <button className={styles.update_button}>Обновить</button>
              </Link>
            </div>
          </div>
        );
      })
    );
  }
}

export default BookCard;
