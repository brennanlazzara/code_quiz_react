import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question1 from '../Pages/Quiz/Question1/Question1';
// import Question2 from '../Pages/Quiz/Question1/Question2';
// import Question3 from '../Pages/Quiz/Question1/Question3';
// import Question4 from '../Pages/Quiz/Question1/Question4';
// import Question5 from '../Pages/Quiz/Question1/Question5';
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
  {  if(questions.length = 0 ) {
     return( <div>
      <h1>loading</h1>
      </div>)
    }
    ifElse {
      return(
            <div className="questionDIV">
      <Question1 question1={questions} />
      {/* <Question2 question2={questions} />
      <Question3 question3={questions} />
      <Question4 question4={questions} />
      <Question5 question5={questions} /> */}
    </div>
      )
    }}
    

  );
};

export default QuestionsTable;
