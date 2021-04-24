import './UpdateCard.css';
import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { db, auth } from '../firebase';

function UpdateCard(props) {
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const dateRef = useRef(null);
  const iSBNRef = useRef(null);
  const { title, author, date, isbn } = props.location.aboutProps;
  console.log(title);
  console.log(author);
  console.log(date);
  console.log(isbn);

  const UpdateCardData = () => {
    if (typeof isbn == 'string') alert('string');
    // console.log(typeof isbn = number);
    db.collection('Books').doc(isbn).update({
      title: titleRef.current.value,
      author: authorRef.current.value,
      date: dateRef.current.value,
      //   title: 'успешно',
      ISBN: isbn,
    });
    titleRef.current.value = '';
    authorRef.current.value = '';
    dateRef.current.value = '';
    iSBNRef.current.value = '';
    alert('Книга успешно изменена');
  };
  return (
    <div className="update-form">
      <p className="prev">Старое название: {title}</p>
      <input
        ref={titleRef}
        className="book-form-input input-book_title"
        placeholder="Новое название книги"
      ></input>
      <p className="prev">Старый автор: {author}</p>
      <input
        ref={authorRef}
        className="book-form-input input-book_author"
        placeholder="Новый автор книги"
      ></input>
      <p className="prev">Старая дата: {date}</p>
      <input
        ref={dateRef}
        className="book-form-input input-book_year"
        placeholder="Новая дата издания"
      ></input>
      {/* <p>Было {isbn}</p> */}
      <p ref={iSBNRef} className="update-form-isbn">
        ISBN Книги: {isbn}
      </p>
      <button className="book-form_button" onClick={UpdateCardData}>
        Изменить книгу
      </button>
    </div>
  );
}
export default UpdateCard;
