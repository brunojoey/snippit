import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import statusAPI from './utils/statusAPI';
import StatusContext from './utils/StatusContext';
import LanguageContext from './utils/LanguageContext';
import KeywordContext from './utils/KeywordContext';
import Nav from './components/Nav';
import Navdrop from './components/Navdrop';
import loginPage from './pages/loginPage';
import profilePage from './pages/profilePage';
import snipPage from './pages/snipPage/index';
import editorPage from './pages/editorPage';
import Home from './pages/Home';
import './App.css';
// import SearchLanguage from './components/SearchLanguage';
// import SearchForm from './components/search';

function App() {
  const [status, setStatus] = useState({ status: false });
  const [language, setLanguage] = useState('');
  const [keywords, setKeywords] = useState([]);

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

  const updateKeywords = (word) => {
    if (word.length > 0) { 
      setKeywords([ ...keywords, word.toLowerCase() ]);
    } else {
      setKeywords([]);
    }
  };

  const updateLanguage = (language) => {
    setLanguage(language);
  };

  return (
    <Router>
      <StatusContext.Provider value={{ status, updateStatus }}>
        {(status.status === false) ? <Nav /> : <Navdrop />}
        <LanguageContext.Provider value={{ language, updateLanguage }}>
        <KeywordContext.Provider value={{ keywords, updateKeywords }}>
        <Switch>
          <Route exact path='/users/:id' component={profilePage} />
          <Route exact path='/snips/:id' component={snipPage} />
          <Route exact path={['/login', '/signup']} component={loginPage} />
          <Route exact path={['/', '/home', '/feed']} component={Home} />
          <Route exact path='/editor' component={editorPage} />
          <Route component={Home} />
        </Switch>
        </KeywordContext.Provider>
        </LanguageContext.Provider>
      </StatusContext.Provider>
    </Router>
  );
}

export default App;
