import React from 'react';
import ProfilePanel from '../components/profilepanel';
import { Row, Col } from 'react-materialize';

function Profile() {
  return (
    <div className="containter">
      <Row>
        <Col s={12} m={6} offset='m3'>
          <ProfilePanel />
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
