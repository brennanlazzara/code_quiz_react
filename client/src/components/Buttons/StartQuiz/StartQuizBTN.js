import React from 'react';
import './style.css';

const StartMenu = () => {
  return (
    <div className='container'>
      <div className='center'>
        <button className='button'>
          <a href='/Quiz'>
            {' '}
            <h3> Start Quiz</h3>
          </a>
        </button>
      </div>
    </div>
  );
};

export default StartMenu;
