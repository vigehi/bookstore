import React from 'react';
import './Book.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <>
      <div className="book">
        <div className="book-holder">
          <span className="School-of">
            Action
          </span>
          <h2>
            {title}
          </h2>
          <p>{author}</p>
          <div className="section">
            <span className="Comments">
              Comments
            </span>
            <span className="delete">
              Delete
            </span>
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
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
