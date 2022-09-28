import React from 'react';
import Header from './Header';
import Book from './Book';
import InputBook from './InputBook';

const Books = () => (
  <>
    <Header />
    <Book title="The Hunger Games" author="Suzanne Collins" />
    <Book title="The new book" author="Kidagaa" />
    <InputBook />
  </>
);

export default Books;
