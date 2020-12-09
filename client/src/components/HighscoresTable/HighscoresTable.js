import React, { Component } from 'react';
import axios from 'axios';
import ResultsTable from './ResultsTable';
import { Table } from 'reactstrap';

import './styles.css';

class HighscoresTable extends Component {
  constructor(props) {
    super(props);
    this.getResults();
  }

  getResults() {
    axios.get('/api/results').then((res) => this.setState([res.data]));
  }

  render() {
    if (this.state) {
      return (
        <div>
          <ResultsTable results={this.state} />
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default HighscoresTable;
