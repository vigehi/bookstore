import React, { useEffect } from 'react';
import './Book.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBookApi, displayBooks } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayBooks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {books.map((book) => (
        <React.Fragment key={book.item_id}>
          <div className="book">
            <div className="book-holder">
              <h2>
                {book.title}
              </h2>
              <p>{book.author}</p>
              <div className="section">
                <span className="Comments">
                  Comments
                </span>
                <button className="delete" type="button" onClick={() => dispatch(deleteBookApi(book.item_id))}>
                  Delete
                </button>
                <span className="edit">
                  Edit
                </span>
              </div>
            </div>

            <div className="Line-2" />
            <div>
              <h2 className="Current-Chapter">

                Current Chapter

              </h2>
              <h1 className="Current-Lesson Text-Style-4">
                Chapter 17
              </h1>
              <div className="Rectangle-2">
                <span className="Update-progress">
                  Update progress
                </span>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default Book;
