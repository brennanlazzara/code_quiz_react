import React from 'react';
import Header from '../../Header/Header';
import StartLessonBTN from '../../Buttons/StartLesson/StartLessonBTN';
import ViewHighscoresBTN from '../../Buttons/ViewHighscores/ViewHighscoresBTN';
import Footer from '../../Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <StartLessonBTN />
      <ViewHighscoresBTN />
      <Footer />
    </div>
  );
};

export default Home;
