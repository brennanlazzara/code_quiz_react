import React from 'react';
import './style.css';

const ViewResults = () => {
  return (
    <div>
      <div className='viewResultsDIV'>
        <h1 className={'header'}>View Results:</h1>
        <h3 className={'youScored'}>
          {JSON.parse(localStorage.getItem('name'))} Scored:{' '}
          {JSON.parse(localStorage.getItem('results'))}%
        </h3>
      </div>
    </div>
  );
};

export default ViewResults;
