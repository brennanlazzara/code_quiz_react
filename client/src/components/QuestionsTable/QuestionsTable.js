import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const QuestionsTable = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    let res = await axios.get('/api/questions');
    setQuestions(res.data);
  };

  return (
    <div>
      {questions.map((res) => {
        return (
          <div className={'questionDIV'}>
            <h1 className={'title'}>{res.title}</h1>
            <div className='topQuestions'>
              <button  className={'button'}>
                <h5>{res.choices[0]}</h5>
              </button>
              <button  className={'button'}>
                <h5>{res.choices[1]}</h5>
              </button>
            </div>
            <div className='bottomQuestions'>
              <button  className={'button'}>
                <h5>{res.choices[2]}</h5>
              </button>
              <button  className={'button'}>
                <h5>{res.choices[3]}</h5>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionsTable;
