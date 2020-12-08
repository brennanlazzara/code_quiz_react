import React, { useState } from 'react';

const Question1 = ({ question }) => {
  const [btnDisabled, setbtnDisabled] = useState(false);

  const answerBtnClicked = (e) => {
    setbtnDisabled(true);
    localStorage.removeItem('results');
    let resultsScore = 0;
    e.target.innerText === question[0].answer
      ? (resultsScore = 20)
      : (resultsScore = 0);
    localStorage.setItem('results', JSON.stringify(resultsScore));
  };
  return (
    <div className={'questionDIV'}>
      <h1 className={'title'}>{question[0].title}</h1>
      <div className='topQuestions'>
        <button
          disabled={btnDisabled}
          onClick={answerBtnClicked}
          className={'button'}
        >
          <h5>{question[0].choices[0]}</h5>
        </button>
        <button
          disabled={btnDisabled}
          onClick={answerBtnClicked}
          className={'button'}
        >
          <h5>{question[0].choices[1]}</h5>
        </button>
      </div>
      <div className='bottomQuestions'>
        <button
          disabled={btnDisabled}
          onClick={answerBtnClicked}
          className={'button'}
        >
          <h5>{question[0].choices[2]}</h5>
        </button>
        <button
          disabled={btnDisabled}
          onClick={answerBtnClicked}
          className={'button'}
        >
          <h5>{question[0].choices[3]}</h5>
        </button>
      </div>
    </div>
  );
};

export default Question1;
