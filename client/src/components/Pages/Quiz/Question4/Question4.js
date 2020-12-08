import React, { useState } from 'react';

const Question4 = ({ question }) => {
  const [btnDisabled, setbtnDisabled] = useState(false);
  const answerBtnClicked = (e) => {
    setbtnDisabled(true);
    const results = JSON.parse(localStorage.getItem('results'));
    let resultsScore;
    e.target.innerText === question[3].answer
      ? (resultsScore = 20)
      : (resultsScore = 0);
    resultsScore += results;
    localStorage.setItem('results', JSON.stringify(resultsScore));
  };
  return (
    <div className={'questionDIV'}>
      <h1 className={'title'}>{question[3].title}</h1>
      <div className='topQuestions'>
        <button
          disabled={btnDisabled}
          onClick={answerBtnClicked}
          className={'button'}
        >
          <h5>{question[3].choices[0]}</h5>
        </button>
        <button
          disabled={btnDisabled}
          onClick={answerBtnClicked}
          className={'button'}
        >
          <h5>{question[3].choices[1]}</h5>
        </button>
      </div>
      <div className='bottomQuestions'>
        <button
          disabled={btnDisabled}
          onClick={answerBtnClicked}
          className={'button'}
        >
          <h5>{question[3].choices[2]}</h5>
        </button>
        <button
          disabled={btnDisabled}
          onClick={answerBtnClicked}
          className={'button'}
        >
          <h5>{question[3].choices[3]}</h5>
        </button>
      </div>
    </div>
  );
};

export default Question4;
