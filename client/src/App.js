import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/components/Pages/Home/Home';
import Lesson from '../src/components/Pages/Lesson/Lesson'
import Question1 from '../src/components/Pages/Quiz/Question1/Question1';
import Question2 from '../src/components/Pages/Quiz/Question1/Question2';
import Question3 from '../src/components/Pages/Quiz/Question1/Question3';
import Question4 from '../src/components/Pages/Quiz/Question1/Question4';
import Question5 from '../src/components/Pages/Quiz/Question1/Question5';
import Results from '../src/components/Pages/Results/Results'

function App() {
  return (
    <Router>
    <div className='App'>
      <Route exact path='/' component={Home} />
      <Route exact path='/Lesson' component={Lesson} />
      <Route exact path='/Question1' component={Question1} />
      <Route exact path='/Question2' component={Question2} />
      <Route exact path='/Question3' component={Question3} />
      <Route exact path='/Question4' component={Question4} />
      <Route exact path='/Question5' component={Question5} />
      <Route exact path='/Results' component={Results} />
    </div>
  </Router>
  );
}

export default App;
