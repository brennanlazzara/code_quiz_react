import React from 'react';
import './style.css';

const ViewHighscoresBTN = () => {
  return (
    <div className='viewHighscores container'>
      <div className='center'>
        <button className='button'>
          <a href='/ViewHighscores'>
            {' '}
            <h3> High Scores</h3>
          </a>
        </button>
      </div>
    </div>
  );
};

export default ViewHighscoresBTN;
