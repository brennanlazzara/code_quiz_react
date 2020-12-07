import React from 'react';

const Question2 = ({ question }) => {
  const answerBtnClicked = (e) => {
    let resultsScore;
    e.target.innerText === question[1].answer
      ? (resultsScore = 20)
      : (resultsScore = 0);
    console.log(resultsScore);
  };
  return (
    <div className={'questionDIV'}>
      <h1 className={'title'}>{question[1].title}</h1>
      <div className='topQuestions'>
        <button onClick={answerBtnClicked} className={'button'}>
          <h5>{question[1].choices[0]}</h5>
        </button>
        <button onClick={answerBtnClicked} className={'button'}>
          <h5>{question[1].choices[1]}</h5>
        </button>
      </div>
      <div className='bottomQuestions'>
        <button onClick={answerBtnClicked} className={'button'}>
          <h5>{question[1].choices[2]}</h5>
        </button>
        <button onClick={answerBtnClicked} className={'button'}>
          <h5>{question[1].choices[3]}</h5>
        </button>
      </div>
    </div>
  );
};

export default Question2;
