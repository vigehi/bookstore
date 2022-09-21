import React from 'react';
import './InputBook.css';

const InputBook = () => (
  <>
    <h1>Add new book</h1>
    <form className="form-container">
      <input
        type="text"
        className="input-title"
        placeholder="Title"
        name="title"
      />
      <input
        type="text"
        className="input-title"
        placeholder="Author"
        name="title"
      />
      <button type="submit" className="input-submit">
        <span className="ADD-BOOK Text-Style">
          ADD BOOK
        </span>
      </button>
    </form>
  </>
);

export default InputBook;
