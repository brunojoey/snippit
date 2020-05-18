
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Tabs, Tab, Container } from 'react-materialize';
import Signup from '../../components/Signup';
import LoginComp from '../../components/Login';
import StatusContext from '../../utils/StatusContext';
import './style.css';

function Login() {
  const { status } = useContext(StatusContext);

  return(
    <Container>
      <div className='login-form'>
        {(status.status !== false) ? <Redirect push to='/home' /> : <></>}

        <Tabs className='tabs-fixed-width z-depth-1' options={{ swipeable: true }}>
          <Tab
            options={{
              duration: 50,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title='Login'
          >
            <LoginComp />
          </Tab>
          <Tab
            options={{
              duration: 50,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title='Signup'
          >
            <Signup />
          </Tab>
        </Tabs>
      </div>
    </Container>
  )
};

export default Login;