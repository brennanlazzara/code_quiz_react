import React from 'react';
import './style.css';

<<<<<<< HEAD
=======
<<<<<<< HEAD:client/src/components/Buttons/StartLesson/StartLessonBTN.js
const StartLessonBTN = () => {
  return (
    <div className='container'>
      <div className='center'>
        <button className='button'>
          <a href='/Lesson'>
=======
>>>>>>> 4c8b013136e379237b235d212074ca87e2f235bc
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
<<<<<<< HEAD
            {' '}
            <h3> Start Quiz</h3>
=======
>>>>>>> 4c8b013136e379237b235d212074ca87e2f235bc:client/src/components/Buttons/StartQuiz/StartQuizBTN.js
            {' '}
            <h3> Start Lesson</h3>
>>>>>>> 4c8b013136e379237b235d212074ca87e2f235bc
          </a>
        </button>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default StartMenu;
=======
export default StartLessonBTN;
>>>>>>> 4c8b013136e379237b235d212074ca87e2f235bc
