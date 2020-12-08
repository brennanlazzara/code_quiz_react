import React from 'react';
import './style.css';

const ViewResultsBTN = () => {
const viewResults = () => {
  alert('HELLO')
}
  return (
    <div className='container'>
      <div className='center'>
        <button onClick={viewResults} className='button'>
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
