import React, { useState } from 'react';

const Question2 = ({ question }) => {
  const [btnDisabled, setbtnDisabled] = useState(false);

  const answerBtnClicked = (e) => {
    setbtnDisabled(true);
    const results = JSON.parse(localStorage.getItem('results'));
    let resultsScore;
    e.target.innerText === question[1].answer
      ? (resultsScore = 20)
      : (resultsScore = 0);
    resultsScore += results;
    localStorage.setItem('results', JSON.stringify(resultsScore));
  };
  return (
    <div className={'questionDIV'}>
      <h1 className={'title'}>{question[1].title}</h1>
      <div className='topQuestions'>
        <button
          disabled={btnDisabled}
          onClick={answerBtnClicked}
          className={'button'}
        >
          <h5>{question[1].choices[0]}</h5>
        </button>
        <button
          disabled={btnDisabled}
          onClick={answerBtnClicked}
          className={'button'}
        >
          <h5>{question[1].choices[1]}</h5>
        </button>
      </div>
      <div className='bottomQuestions'>
        <button
          disabled={btnDisabled}
          onClick={answerBtnClicked}
          className={'button'}
        >
          <h5>{question[1].choices[2]}</h5>
        </button>
        <button
          disabled={btnDisabled}
          onClick={answerBtnClicked}
          className={'button'}
        >
          <h5>{question[1].choices[3]}</h5>
        </button>
      </div>
    </div>
  );
};

export default Question2;
