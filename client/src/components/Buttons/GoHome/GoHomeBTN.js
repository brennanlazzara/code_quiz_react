import React from 'react';
import './style.css';

const GoHomeBTN = () => {
  return (
    <div className='container'>
      <div className='center'>
        <button className='button'>
          <a href='/'>
            {' '}
            <h3> Return Home</h3>
          </a>
        </button>
      </div>
    </div>
  );
};

export default GoHomeBTN;
