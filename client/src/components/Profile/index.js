import React, { useState, useContext } from "react";
import { Row, Col, Button } from 'react-materialize';
import StatusContext from '../../utils/StatusContext';
import ProfileImage from '../Cloudinary/index';
import Feed from "../Feed";
import './style.css';

function ProfilePanel() {
    const { status, updateStatus } = useContext(StatusContext);

    const [user, setUser] = useState();
    const [biography, setBiography] = useState();
    
    const getUser = (event) => {
        if (user) {
            let userInfo = event.target.user;
            setUser({ ...user, [userInfo]: event.target.value });
            updateStatus(userInfo);
        };
    };

    const getBio = (event) => {
        event.preventDefault();
        if (biography) {
            let bio = event.target.biography;
            setBiography({ ...biography, [bio]: event.target.value });
            updateStatus(bio);
        };
    };

    const handleEdit = (event) => {

    };

    return (
        <div>
            <Row>
                <Col s={10}>
                    <h3 updateStatus={getUser}>{status.username}</h3>
                </Col>
            </Row>
            <Row>
                <Col s={4}>
                    <ProfileImage />
                </Col>
                <Col s={8}>
                    <Button node='button' type='submit' waves='light' onClick={handleEdit}>Edit</Button>
                    <p updateStatus={getBio}>{status.biography}</p>
                    <a href="GITHUB">GITHUB</a>
                    <a href="LINKEDIN">LinkedIn</a>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Feed />
                </Col>
            </Row>
        </div>

    );
}

export default ProfilePanel;