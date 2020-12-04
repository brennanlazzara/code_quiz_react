import React from 'react';
import './style.css';

const StartLessonBTN = () => {
  return (
    <div className='container'>
      <div className='center'>
        <button className='button'>
          <a href='/Lesson'>
            {' '}
            <h3> Start The Lesson</h3>
          </a>
        </button>
      </div>
    </div>
  );
};

export default StartLessonBTN;
