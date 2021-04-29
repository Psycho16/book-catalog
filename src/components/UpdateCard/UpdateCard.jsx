import styles from './UpdateCard.module.css';
import React, { useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { db } from '../firebase';

function UpdateCard(props) {
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const dateRef = useRef(null);
  const iSBNRef = useRef(null);
  if (!props.location.aboutProps) return <Redirect to="/" />;
  const { title, author, date, isbn } = props.location.aboutProps;

  const validateEmpty = (inp) => {
    if (inp === null) {
      return <p className="error-message">Пустое поле</p>;
    }
  };
  const UpdateCardData = () => {
    db.collection('Books').doc(isbn).update({
      title: titleRef.current.value,
      author: authorRef.current.value,
      date: dateRef.current.value,
      ISBN: isbn,
    });
    titleRef.current.value = '';
    authorRef.current.value = '';
    dateRef.current.value = '';
    iSBNRef.current.value = '';
    alert('Книга успешно изменена');
  };
  return (
    <div className={styles.update_form}>
      <p className={styles.prev}>Старое название: {title}</p>
      <input
        ref={titleRef}
        className={styles.book_form_input}
        placeholder="Новое название книги"
      ></input>
      <p className={styles.prev}>Старый автор: {author}</p>
      <input
        ref={authorRef}
        className={styles.book_form_input}
        placeholder="Новый автор книги"
      ></input>
      <p className={styles.prev}>Старая дата: {date}</p>
      <input
        ref={dateRef}
        className={styles.book_form_input}
        placeholder="Новая дата издания"
      ></input>
      <p ref={iSBNRef} className={styles.update_form_isbn}>
        ISBN Книги: {isbn}
      </p>
      <button className={styles.book_form_button} onClick={UpdateCardData}>
        Изменить книгу
      </button>
    </div>
  );
}
export default UpdateCard;
