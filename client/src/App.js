import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Nav from './components/Nav';
import Navdrop from './components/Navdrop';
import statusAPI from './utils/statusAPI';
import StatusContext from './utils/StatusContext';
import loginPage from './pages/loginPage/index';
import profilePage from './pages/profilePage';
import snipPage from './pages/snipPage/index';
import editorPage from './pages/editorPage';
import Home from './pages/Home';
import Foot from './components/Footer';
import './App.css';

function App() {
  const [status, setStatus] = useState({ status: false });
  const [taglines, setTaglines] = useState('');
  const [path, setPath] = useState(window.location.pathname);
  const size = useWindowSize();

  // Check status
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
  };

  const updateTaglines = (words) => {
    if (words.length > 0) { 
      setTaglines(words);
    } else {
      setTaglines([]);
    }
  };

  // The following to handle window resize was obtained from https://usehooks.com/useWindowSize/
  // Hook
  function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      if (!isClient) {
        return false;
      }
      
      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
  }
  // ************************************************************************************

  return (
    <Router>
      <div className='not-footer-wrap'>
        <StatusContext.Provider value={{ status, updateStatus }}>
          {(status.status === false) ? <Nav path={path} setPath={setPath}/> : <Navdrop size={size} path={path} setPath={setPath}/>}
            <Switch>
              <Route exact path='/users/:id' component={profilePage} />
              <Route exact path='/snips/:id' component={snipPage} />
              <Route exact path={['/login', '/signup']} component={loginPage} />
              <Route exact path={['/', '/home', '/feed']} component={Home} />
              <Route exact path='/editor' component={editorPage} />
              <Route component={Home} />
            </Switch>
        </StatusContext.Provider>
      </div>
      <Foot />
    </Router>
  );
}

export default App;
