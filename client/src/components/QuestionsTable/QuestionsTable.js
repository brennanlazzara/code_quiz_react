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
          <div>
            <h1>{res.title}</h1>
            <button>{res.choices[0]}</button>
            <button>{res.choices[1]}</button>
            <button>{res.choices[2]}</button>
            <button>{res.choices[3]}</button>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionsTable;
