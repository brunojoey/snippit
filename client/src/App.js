import React from 'react';
import './App.css';
import Form from './components/Form';
import Home from './components/Home';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={'/login'} component={Form} />
        <Route exact path={'/'} component={Home} />
      </Router>
    </div>
  );
}

export default App;