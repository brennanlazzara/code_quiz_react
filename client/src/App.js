import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/components/Pages/Home/Home';
import Lesson from '../src/components/Pages/Lesson/Lesson'
import Quiz from '../src/components/Pages/Quiz/Quiz';
import Results from '../src/components/Pages/Results/Results'

function App() {
  return (
    <Router>
    <div className='App'>
      <Route exact path='/' component={Home} />
      <Route exact path='/Lesson' component={Lesson} />
      <Route exact path='/Quiz' component={Quiz} />
      <Route exact path='/Results' component={Results} />
    </div>
  </Router>
  );
}

export default App;
