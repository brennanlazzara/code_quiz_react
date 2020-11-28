import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer-dark' style={{ padding: 12 }}>
      <footer>
        <div className='container'>
          <div className='row' style={{ height: 64 }}>
            <div
              className='col-sm-6 col-md-3 item'
              style={{ height: 64, minHeight: 4, margin: 'auto' }}
            >
              <img
                src='assets/img/dyhIcon.png'
                alt={'footer'}
                width='128px'
                height='128px'
                style={{ width: 125, height: 125 }}
              />
            </div>
            <div
              className='col item social'
              style={{ height: 64, marginTop: 150 }}
            >
              <a href='https://github.com/BrennanPredmore'>
                <FontAwesomeIcon icon={faGithubAlt} />
              </a>
              <a href='https://www.linkedin.com/in/brennan-predmore-132306195/'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>

            <div
              className='col-md-6 item text'
              style={{ maxWidth: 266, height: 64, minHeight: 64 }}
            >
              <h3 style={{ marginBottom: 0 }}>Do Your Homework© 2020</h3>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
