import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import img from './logoin.jpeg';

const Header = () => (
  <>
    <header className="headsection">
      <div className="inner-head">
        <span className="Bookstore-CMS Text-Style-5">
          Bookstore CMS
        </span>
        <nav className="lists">
          <Link to="/" className="BOOKS Text-Style-3">

            BOOKS
          </Link>
          <Link to="/categories" className="CATEGORIES Text-Style-3">

            CATEGORIES
          </Link>
        </nav>
      </div>
      <img src={img} className="list-img" alt="login" />
    </header>
  </>
);

export default Header;
