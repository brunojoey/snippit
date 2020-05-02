import React from "react";
import { Row, Col } from "react-materialize";
import ProfileImage from '../Cloudinary/index';
import './style.css';

function ProfilePanel() {
    return (
        <Row>
            <Col s={4} className='avatar'>
                <ProfileImage />
            </Col>
            <Col s={8} className='bio'>
                <h3>User Info</h3>
                <p>
                    user info/bio here
                </p>
            </Col>
        </Row>
    );
}

export default ProfilePanel;