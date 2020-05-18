
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
        <Container className='container'>
          {(status.status !== false) ? <Redirect push to='/home' /> : <></>}
          <Row>
            <Col s={12}>
              <Tabs className='tab-demo z-depth-1 tabs-fixed-width' >
                <Tab
                  options={{
                    duration: 150,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: true
                  }}
                  title='Login'
                >
                  <LoginComp />
                </Tab>
                <Tab
                  options={{
                    duration: 150,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: true
                  }}
                  title='Signup'
                >
                  <Signup />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  )
};

export default Login;