import './AddNewCard.css';
import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
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
    <div className="book-form">
      <input
        ref={title}
        className="book-form-input input-book_title"
        placeholder="Название книги"
      ></input>
      <input
        ref={author}
        className="book-form-input input-book_author"
        placeholder="Автор книги"
      ></input>
      <input
        ref={date}
        className="book-form-input input-book_year"
        placeholder="Дата издания"
      ></input>
      <input ref={iSBN} className="book-form-input input-book_ISBN" placeholder="ISBN"></input>
      <button className="book-form_button" onClick={AddNewCardData}>
        Добавить книгу
      </button>
    </div>
  );
}
export default AddNewCard;
