import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import StartQuiz from '../../Buttons/StartQuiz/StartQuiz';
import AboutDYH from '../../AboutDYH/AboutDYH';


const Lesson = () => {
  return (
    <div>
      <Header />
      <AboutDYH />
      <StartQuiz />
      <Footer />
    </div>
  );
};

export default Lesson;
