import React from 'react';
import './style.css';

const StartMenu = () => {
  const removeLocalStorage = () => {
    localStorage.removeItem('results');
    localStorage.removeItem('name');
  };
  return (
    <div className='container'>
      <div className='center'>
        <button onClick={removeLocalStorage} className='button'>
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
