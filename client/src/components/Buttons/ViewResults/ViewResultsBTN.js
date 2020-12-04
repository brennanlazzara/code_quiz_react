import React from 'react';
import './style.css';

const ViewResultsBTN = () => {
  return (
    <div className='container'>
      <div className='center'>
        <button className='button'>
          <a href='/Results'>
            {' '}
            <h3> View Your Results</h3>
          </a>
        </button>
      </div>
    </div>
  );
};

export default ViewResultsBTN;
