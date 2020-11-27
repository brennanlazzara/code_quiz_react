import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './style.css';

const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className='display-3'>Do Your Homework Code Quiz</h1>
          <p className='lead'>
            This is the official Do Your Homework quiz fan club quiz for the
            biggest fanatics of the greatest band in Austin Texas history!
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
