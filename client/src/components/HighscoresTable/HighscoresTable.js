import React, { Component } from 'react';
import { Table } from 'reactstrap';

import './styles.css';

class HighscoresTable extends Component {
  constructor(props) {
    super(props);
    this.getResults();
  }

  getResults() {
    let name = JSON.parse(localStorage.getItem('name'));
    let result = JSON.parse(localStorage.getItem('results'));
    this.setState({
      name: name,
      result: result,
    });
  }

  render() {
    if (!this.state) {
      return (
        <div>
          <div>{console.log(this.state)}</div>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default HighscoresTable;
