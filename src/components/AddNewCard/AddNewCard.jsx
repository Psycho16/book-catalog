import styles from './AddNewCard.module.css';
import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import { db, auth } from '../firebase';

function AddNewCard() {
  const title = useRef(null);
  const author = useRef(null);
  const date = useRef(null);
  const iSBN = useRef(null);

  // const AddNewCardData = () => {
  //   db.collection('Books').add({
  //     title: title.current.value,
  //     author: author.current.value,
  //     date: date.current.value,
  //     ISBN: iSBN.current.value,
  //   });
  // };
  const AddNewCardData = () => {
    db.collection('Books').doc(iSBN.current.value).set({
      title: title.current.value,
      author: author.current.value,
      date: date.current.value,
      ISBN: iSBN.current.value,
    });
    title.current.value = '';
    author.current.value = '';
    date.current.value = '';
    iSBN.current.value = '';
    alert('Книга успешно добавлена');
  };

  return (
    <div className={styles.book_form}>
      <input
        ref={title}
        className={styles.book_form_input}
        placeholder="Введите название книги"
      ></input>
      <input
        ref={author}
        className={styles.book_form_input}
        placeholder="Введите автора книги"
      ></input>
      <input
        ref={date}
        className={styles.book_form_input}
        placeholder="Введите дату издания"
      ></input>
      <input
        ref={iSBN}
        className={styles.book_form_input}
        placeholder="Введите ISBN(Не пустой)"
      ></input>
      <button className={styles.book_form_button} onClick={AddNewCardData}>
        Добавить книгу
      </button>
    </div>
  );
}
export default AddNewCard;
