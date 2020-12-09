import React from 'react';
import { Table } from 'reactstrap';

const ResultsTable = ({ results }) => {
  return (
    <div>
      <h1>Your HighScores</h1>
      <div>{console.log(results[0])}</div>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Results</th>
          </tr>
        </thead>
        <tbody>
          {results[0].map((e) => {
            return (
              <tr key={e._id}>
                <td>{e.name}</td>
                <td>{e.results}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ResultsTable;
