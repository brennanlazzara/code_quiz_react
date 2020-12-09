import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

import './styles.css';

class HighscoresTable extends Component {
  constructor(props) {
    super(props);
    this.getResults();
  }

  getResults() {
    axios.get('/api/results').then((res) => {
      console.log(res.data);
      this.setState(res.data);
    });
  }

  render() {
    if (this.state) {
      return (
        <div>
          <h1>Your HighScores</h1>
          <div>{console.log(this.state)}</div>
          {/* <Table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Results</th>
              </tr>
            </thead>
            <tbody>
              {this.state.map((e) => {
                return (
                  <tr key={e._id}>
                    <td>{e.name}</td>
                    <td>{e.results}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table> */}
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default HighscoresTable;
