import React from 'react';

const Question5 = ({ question }) => {
  return (
    <div className={'questionDIV'}>
      <h1 className={'title'}>{question[4].title}</h1>
      <div className='topQuestions'>
        <button className={'button'}>
          <h5>{question[4].choices[0]}</h5>
        </button>
        <button className={'button'}>
          <h5>{question[4].choices[1]}</h5>
        </button>
      </div>
      <div className='bottomQuestions'>
        <button className={'button'}>
          <h5>{question[4].choices[2]}</h5>
        </button>
        <button className={'button'}>
          <h5>{question[4].choices[3]}</h5>
        </button>
      </div>
    </div>
  );
};

export default Question5;
