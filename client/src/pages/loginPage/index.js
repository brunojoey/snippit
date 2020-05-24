
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Tabs, Tab, Container } from 'react-materialize';
import Signup from '../../components/Signup';
import LoginComp from '../../components/Login';
import StatusContext from '../../utils/StatusContext';
import './style.css';

function Login(props) {
  const { status } = useContext(StatusContext);
  const path = props.match.path;
  
  return(
    <Container>
      <Row>
        <Col s={12} m={8} l={6} offset='m2 l3'>
          <div className='login-card'>
            {(status.status !== false) ? <Redirect push to='/home' /> : <></>}

            <Tabs className='tabs-fixed-width login-tabs' options={{ swipeable: false }}>
              <Tab
                active={(path === '/login')}
                options={{
                  duration: 200,
                  onShow: null,
                  responsiveThreshold: Infinity,
                  swipeable: false
                }}
                title='Login'
              >
                <LoginComp />
              </Tab>
              <Tab
                active={(path === '/signup')}
                options={{
                  duration: 200,
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
        </Col>
      </Row>
    </Container>
  )
};

export default Login;