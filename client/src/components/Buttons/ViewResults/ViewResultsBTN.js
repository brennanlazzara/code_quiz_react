import React from 'react';
import axios from 'axios';
import './style.css';

const ViewResultsBTN = () => {
  const viewResults = () => {
    let score = JSON.parse(localStorage.getItem('results'));
    let name = prompt('What is your name?');
    localStorage.setItem('name', JSON.stringify(name));
    let body = {
      name: name,
      results: score,
    };
    axios.post('/api/results', body);
  };

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
