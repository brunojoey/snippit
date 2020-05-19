import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import statusAPI from './utils/statusAPI';
import StatusContext from './utils/StatusContext';
import TaglineContext from './utils/TaglineContext';
import Nav from './components/Nav';
import Navdrop from './components/Navdrop';
import loginPage from './pages/loginPage/index';
import profilePage from './pages/profilePage';
import snipPage from './pages/snipPage/index';
import editorPage from './pages/editorPage';
import Home from './pages/Home';
import './App.css';

function App() {
  const [status, setStatus] = useState({ status: false });
  const [taglines, setTaglines] = useState('');
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    let mounted = true;
    
    // API call to see if user is logged in.
    async function fetchData() {
      if (mounted) {
        let { data } = await statusAPI.getStatus();
        setStatus(data);
      }
    }
    fetchData();

    return () => mounted = false;
  }, []);

  const updateStatus = async () => {
    // API call to see if user is loggin in.
    let { data } = await statusAPI.getStatus();
    setStatus(data);
  }

  const updateTaglines = (words) => {
    if (words.length > 0) { 
      setTaglines(words);
    } else {
      setTaglines([]);
    }
  };

  return (
    <Router>
      <StatusContext.Provider value={{ status, updateStatus }}>
        {(status.status === false) ? <Nav path={path} setPath={setPath}/> : <Navdrop />}
        <TaglineContext.Provider value={{ taglines, updateTaglines }}>
          <Switch>
            <Route exact path='/users/:id' component={profilePage} />
            <Route exact path='/snips/:id' component={snipPage} />
            <Route exact path={['/login', '/signup']} component={loginPage} />
            <Route exact path={['/', '/home', '/feed']} component={Home} />
            <Route exact path='/editor' component={editorPage} />
            <Route component={Home} />
          </Switch>
        </TaglineContext.Provider>
      </StatusContext.Provider>
    </Router>
  );
}

export default App;
