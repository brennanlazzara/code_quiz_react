import React from 'react';

const Question2 = (props) => {
  return (
    <div className={'questionDIV'}>
      <h1 className={'title'}>{props.title}</h1>
      <div className='topQuestions'>
        <button className={'button'}>
          <h5>{props.choices[0]}</h5>
        </button>
        <button className={'button'}>
          <h5>{props.choices[1]}</h5>
        </button>
      </div>
      <div className='bottomQuestions'>
        <button className={'button'}>
          <h5>{props.choices[2]}</h5>
        </button>
        <button className={'button'}>
          <h5>{props.choices[3]}</h5>
        </button>
      </div>
    </div>
  );
};

export default Question2;