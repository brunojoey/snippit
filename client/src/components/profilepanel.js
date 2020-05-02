import React, { useState } from "react";
import { Row, Col } from 'react-materialize';
import ProfileImage from './Cloudinary/index';

const [user, setUser] = useState();
const [biography, setBiography] = useState('');
const [snips, setSnips] = useState();

function ProfilePanel() {
    const getUser = (event) => {
        let userInfo = event.target.user;
        setUser(userInfo);
    };

    const getSnips = (event) => {
        event.preventDefault();
        let userSnips = event.target.snips;
        setSnips(userSnips);
    };

    const handleEdit = (event) => {
        event.preventDefault();
        const bio = event.target.biography;
        setBiography(bio);
    };

    return (
        <div>
            <Row>
                <Col s={10}>
                    <h3 >{this.user}</h3>
                </Col>
            </Row>
            <Row>
                <Col s={4}>
                    <ProfileImage />
                </Col>
                <Col s={8}>
                    <p className="far fa-edit ">{this.biography}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul>
                        <li>{this.snips}</li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
}

export default ProfilePanel;