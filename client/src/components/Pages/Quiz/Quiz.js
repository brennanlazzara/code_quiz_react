import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Questions from '../../Questions/Questions';
// import ViewResults from '../../Buttons/ViewResults';

const Quiz = () => {
  return (
    <div>
      <Header />
      <Questions />
      {/* <ViewResults /> */}
      <Footer />
    </div>
  );
};

export default Quiz;
