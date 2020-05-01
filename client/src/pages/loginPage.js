
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Tabs, Tab } from 'react-materialize';
import Signup from '../components/Signup';
import LoginComp from '../components/Login';
import StatusContext from '../utils/StatusContext';

function Login() {
  const { status } = useContext(StatusContext);

  return(
    <div className='container'>
      {(status.status !== false) ? <Redirect to='/home' /> : <></>}
      <Row>
        <Col s={12} m={6} offset='m3'>
          <Tabs className='tab-demo z-depth-1 tabs-fixed-width' options={{ swipeable: true }}>
            <Tab
              options={{
                duration: 150,
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
                duration: 150,
                onShow: null,
                responsiveThreshold: Infinity,
                swipeable: false
              }}
              title='Signup'
            >
              <Signup />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
}

export default Login;