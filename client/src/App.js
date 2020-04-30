import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import statusAPI from './utils/statusAPI';
import StatusContext from './utils/StatusContext';
import Nav from './components/nav';
import Navdrop from './components/Navdrop';
import loginPage from './pages/loginPage';
import profilePage from './pages/profilePage';
import snipPage from './pages/snipPage';
import Home from './pages/Home';
import './App.css';

function App() {
  const [status, setStatus] = useState({ status: false });

  useEffect(() => {
    // API call to see if user is logged in.
    async function fetchData() {
      let { data } = await statusAPI.getStatus();
      setStatus(data);
    }

    fetchData();
  }, []);

  const updateStatus = async () => {
    // API call to see if user is loggin in.
    let { data } = await statusAPI.getStatus();
    setStatus(data);
  }

  return (
    <Router>
      <StatusContext.Provider value={{ status, updateStatus }}>
        {(status.status === false) ? <Nav /> : <Navdrop />}
        <Switch>
          <Route exact path='/user/:id' component={profilePage} />
          <Route exact path='/snip/:id' component={snipPage} />
          <Route exact path={['/login', '/signup']} component={loginPage} />
          <Route exact path={['/', '/home']} component={Home} />
          <Route component={Home} />
        </Switch>
      </StatusContext.Provider>
    </Router>
  );
}

export default App;
