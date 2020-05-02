import React from 'react';
import ProfilePanel from '../components/profile';
import Foot from '../components/Footer';
import { Row } from 'react-materialize';

function Profile(props) {
  return (
    <div className="containter" id="home-container">
      <Row>
          <ProfilePanel />
      </Row>
      <Foot />
    </div>
  );
};

export default Profile;
