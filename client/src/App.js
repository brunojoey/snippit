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
import snipPage from './pages/snipPage';
import editorPage from './pages/editorPage';
import Home from './pages/Home';
import './App.css';
// import SearchLanguage from './components/SearchLanguage';
// import SearchForm from './components/search';

function App() {
  const [status, setStatus] = useState({ status: false });
  const [language, setLanguage] = useState({ language: 'Javascript' });
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

  const updateKeywords = async (event) => {
    console.log('UPDATE KEYWORD');
    const word = event.target.keywords
    if (keywords > 3) {
      let { data } = await keywords;
      console.log('KEYWORD DATA: ', data);
      setKeywords([...keywords].push(word.toLowerCase()));

    } else {
      return "Please add more characters."
    }
  };

  const updateLanguage = async () => {
    console.log('UPDATE LANGUAGE');
    let { data } = await language;
    console.log('LANGUAGE DATA: ', data);
    setLanguage(data);
  };

  return (
    <Router>
      <StatusContext.Provider value={{ status, updateStatus }}>
        {(status.status === false) ? <Nav /> : <Navdrop />}
        <LanguageContext.Provider value={{ language, updateLanguage }}>
        <KeywordContext.Provider value={{ keywords, updateKeywords }}>
        <Switch>
          <Route exact path='/user/:id' component={profilePage} />
          <Route exact path='/snip/:id' component={snipPage} />
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
