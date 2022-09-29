import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import './Book.css';
import { cStatus } from '../redux/categories/categories';

function Categories() {
  const status = useSelector((state) => state.categ);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <button className="status" type="button" onClick={() => { dispatch(cStatus()); }}>Check Status</button>
      <p>{status}</p>
    </div>
  );
}

export default Categories;
