import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import StartQuizBTN from '../../Buttons/StartQuiz/StartQuizBTN';
import AboutDYH from '../../AboutDYH/AboutDYH';


const Lesson = () => {
  return (
    <div>
      <Header />
      <AboutDYH />
      <StartQuizBTN />
      <Footer />
    </div>
  );
};

export default Lesson;
