import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

class QuestionsTable extends Component {
  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    axios.get('/api/questions').then((res) => {
      this.setState({
        questionData: {
          title: res.data[0].title,
          choices: [
            res.data[0].choices[0],
            res.data[0].choices[1],
            res.data[0].choices[2],
            res.data[0].choices[3],
          ],
        },
      });
    });
  }
  constructor() {
    super();

    this.state = {
      questionData: {},
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.questionData.title}</h1>
        <button>{console.log(this.state.questionData.choices)}</button>
        {/* <button>{this.state.questionData.choices[1]}</button>
        <button>{this.state.questionData.choices[2]}</button>
        <button>{this.state.questionData.choices[3]}</button> */}
      </div>
    );
  }
}

export default QuestionsTable;
