import React, { useState, useContext } from "react";
import { Row, Col, Button } from 'react-materialize';
import StatusContext from '../../utils/StatusContext';
import ProfileImage from '../Cloudinary/index';
import './style.css';


function ProfilePanel() {
    const { status, updateStatus } = useContext(StatusContext);

    const [user, setUser] = useState();
    const [biography, setBiography] = useState('');
    const [snips, setSnips] = useState();
    
    const getUser = (event) => {
        if (user) {
            let userInfo = event.target.user;
            setUser(userInfo);
        };
    };

    const getSnips = (event) => {
        event.preventDefault();
        if (snips) {
            let userSnips = event.target.snips;
            setSnips(userSnips);
        };
    };

    const getBio = (event) => {
        event.preventDefault();
        if (biography) {
            let bio = event.target.biography;
            setBiography(bio);
        };
    };

    const handleEdit = (event) => {

    };

    return (
        <div>
            <Row>
                <Col s={10}>
                    <h3>{status.username}</h3>
                </Col>
            </Row>
            <Row>
                <Col s={4}>
                    <ProfileImage />
                </Col>
                <Col s={8}>
                    <Button className='far fa-edit' node='button' type='submit' waves='light' onClick={handleEdit}>Submit</Button>
                    <p>{status.biography}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul handle={getSnips}>
                        {/* <li>{this.sn}</li> */}
                    </ul>
                </Col>
            </Row>
        </div>

    );
}

export default ProfilePanel;