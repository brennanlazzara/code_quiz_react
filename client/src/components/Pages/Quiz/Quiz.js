import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Questions from '../../Questions/Questions';
import ViewResultsBTN from '../../Buttons/ViewResults/ViewResultsBTN';

const Quiz = () => {
  return (
    <div>
      <Header />
      <Questions />
      <ViewResultsBTN />
      <Footer />
    </div>
  );
};

export default Quiz;
