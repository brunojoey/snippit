import React, { useState, useContext } from "react";
import { Row, Col, Button } from 'react-materialize';
import StatusContext from '../../utils/StatusContext';
import ProfileImage from '../Cloudinary/index';
import UserEdit from './EditModal';
import Feed from "../Feed";
import './style.css';

function ProfilePanel() {
    const { status, updateStatus } = useContext(StatusContext);

    const [user, setUser] = useState();
    const [biography, setBiography] = useState();
    const [github, setGithub] = useState();
    const [linkedIn, setLinkedIn] = useState();
    
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

    const getGithub = (event) => {
        let githubLink = event.target.github;
        if (!githubLink) {
            githubLink = user.github;
        }
        setGithub(githubLink);
    };

    const getLinkedIn = (event) => {
        let linkedInLink = event.target.linkedIn;
        if (!linkedInLink) {
            linkedInLink = user.linkedIn;
        }
        setLinkedIn(linkedInLink);
    };

    return (
        <div>
            <Row>
                <Col s={6} lg={10}>
                    <UserEdit />
                    <h3 onChange={getUser}>{status.username}</h3>
                </Col>
            </Row>
            <Row>
                <Col s={2} lg={4}>
                    <ProfileImage />
                </Col>
                <Col s={4} lg={6}>
                    <p onChange={getBio}>My Biography {status.biography}</p>
                    <a href={getGithub}>My Github</a>
                    <a href={getLinkedIn}>My LinkedIn</a>
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