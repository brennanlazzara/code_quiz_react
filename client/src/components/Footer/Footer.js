import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <div className='footer-dark container-fluid' style={{ padding: 12 }}>
        <div className='row' style={{ height: 64 }}>
          <div className='col item social'>
            <a href='https://github.com/BrennanPredmore'>
              <FontAwesomeIcon
                style={{ color: 'red', background: '333' }}
                icon={faGithubAlt}
              />
            </a>
            <a href='https://www.linkedin.com/in/brennan-predmore-132306195/'>
              <FontAwesomeIcon style={{ color: 'red' }} icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
