import React from 'react';
import ProfilePanel from '../components/profilepanel';
import Foot from '../components/Footer';
import { Row, Col } from 'react-materialize';

function Profile(props) {
  return (
    <div className="containter" id="home-container">
      <Row>
        <Col s={12} m={6} offset='m3'>
          <ProfilePanel />
        </Col>
      </Row>
      <Foot />
    </div>
  );
};

export default Profile;
