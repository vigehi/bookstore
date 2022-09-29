import { React, useState } from 'react';
import './InputBook.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { add } from '../redux/books/books';

const InputBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('Book Title');
  const [author, setAuthor] = useState('Author');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(add(newBook));
  };
  return (
    <>
      <h1>Add new book</h1>
      <form className="form-container" onSubmit={submitBookToStore}>
        <input
          type="text"
          className="input-title"
          placeholder={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="input-title"
          placeholder={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" className="input-submit">
          ADD BOOK
        </button>
      </form>
    </>
  );
};

export default InputBook;
