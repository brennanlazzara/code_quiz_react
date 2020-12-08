import React from 'react';
<<<<<<< HEAD
import RetryQuizBTN from '../Buttons/RetryQuizBTN/RetryQuizBTN.js'
=======
>>>>>>> 4c8b013136e379237b235d212074ca87e2f235bc
import './style.css';

const ViewResults = () => {
  return (
    <div>
      <div className='viewResultsDIV'>
        <h1 className={'header'}>View Results:</h1>
        <h3 className={'youScored'}>
          {JSON.parse(localStorage.getItem('name'))} Scored:{' '}
          {JSON.parse(localStorage.getItem('results'))}%
        </h3>
      </div>
<<<<<<< HEAD
      <RetryQuizBTN />
=======
>>>>>>> 4c8b013136e379237b235d212074ca87e2f235bc
    </div>
  );
};

export default ViewResults;
