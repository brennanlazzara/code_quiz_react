import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/components/Pages/Home/Home';
import Lesson from '../src/components/Pages/Lesson/Lesson';
import Quiz from '../src/components/Pages/Quiz/Quiz';
import Results from '../src/components/Pages/Results/Results';
import ViewHighscores from './components/Pages/ViewHighscores/ViewHighscores';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route exact path='/Lesson' component={Lesson} />
          <Route exact path='/Quiz' component={Quiz} />
          <Route exact path='/Results' component={Results} />
          <Route exact path='/ViewHighscores' component={ViewHighscores} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
