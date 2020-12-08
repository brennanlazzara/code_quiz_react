import React from 'react';
import './style.css';

<<<<<<< HEAD
<<<<<<< HEAD:client/src/components/Buttons/StartLesson/StartLessonBTN.js
=======
>>>>>>> 4c8b013136e379237b235d212074ca87e2f235bc
const StartLessonBTN = () => {
  return (
    <div className='container'>
      <div className='center'>
        <button className='button'>
          <a href='/Lesson'>
<<<<<<< HEAD
=======
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
>>>>>>> 4c8b013136e379237b235d212074ca87e2f235bc:client/src/components/Buttons/StartQuiz/StartQuizBTN.js
            {' '}
            <h3> Start Lesson</h3>
=======
            {' '}
            <h3> Start The Lesson</h3>
>>>>>>> 4c8b013136e379237b235d212074ca87e2f235bc
          </a>
        </button>
      </div>
    </div>
  );
};

export default StartLessonBTN;
