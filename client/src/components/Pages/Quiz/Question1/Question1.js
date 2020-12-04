import React from 'react';

const Question1 = ({question1}) => {
    console.log(question1[0])
  return (
    <div className={'questionDIV'}>
      {/* <h1 className={'title'}>{question1[0].title}</h1>
      <div className='topQuestions'>
        <button className={'button'}>
          <h5>{question1[0].choices[0]}</h5>
        </button>
        <button className={'button'}>
          <h5>{question1[0].choices[1]}</h5>
        </button>
      </div>
      <div className='bottomQuestions'>
        <button className={'button'}>
          <h5>{question1[0].choices[2]}</h5>
        </button>
        <button className={'button'}>
          <h5>{question1[0].choices[3]}</h5>
        </button>
      </div> */}
    </div>
  );
};

export default Question1;
