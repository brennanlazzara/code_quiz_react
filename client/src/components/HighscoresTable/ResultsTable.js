import React from 'react';
import { Table } from 'reactstrap';
import './styles.css';
import GoHomeBTN from '../Buttons/GoHome/GoHomeBTN'

const ResultsTable = ({ results }) => {
  return (
    <div className={'viewResultsDIV'}>
      <h1 className={'header'}>HighScores</h1>
      <div>{console.log(results[0])}</div>
      <Table>
        <thead>
          <tr className={'tableHeader'}>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {results[0].map((e) => {
            return (
              <tr key={e._id}>
                <td className={'youScored'}>{e.name}</td>
                <td className={'youScored'}>{e.results}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
<GoHomeBTN />
    </div>
  );
};

export default ResultsTable;
