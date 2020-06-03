import React, { useState, useContext, useEffect } from "react";
import { Row, Col } from 'react-materialize';
import StatusContext from '../../utils/StatusContext';
import ProfileImage from '../Cloudinary/index';
import UserEdit from './EditModal/index.js';
import usersAPI from '../../utils/usersAPI';
import snipsAPI from '../../utils/snipsAPI';
import './style.css';

// ONE LINE AT A TIME

function ProfilePanel({ setBiography, setLinkedin, setGithub, status, biography, linkedin, github }) {
    // const getUser = (event) => {
    //     statusAPIgetStatus();
    //     console.log("STATUS", statusAPI.getStatus());
    //     let userID = usersAPI.getUser(user = event.target.username);
    //     console.log("USER", userID);
    // };

    // const getUserSnips = (event) => {
    //     let userID = usersAPI.getUser(user = event.target.username);
    //     console.log("USER", userID);
    //     let snipsID = snipsAPI.getSnip(snips = event.target.snips);
    //     console.log("SNIPS", snipsID);
    // };


    // get profile id along with github link and linkedin link
        
    // const getBio = (event) => {
    //     event.preventDefault();
    //     if (biography) {
    //         let bio = event.target.biography;
    //         setBiography({ ...biography, [bio]: event.target.value });
    //         updateStatus(bio);
    //     };
    // };

    // const getGithub = (event) => {
    //     let githubLink = event.target.github;
    //     if (!githubLink) {
    //         githubLink = user.github;
    //     }
    //     setGithub(githubLink);
    //     updateStatus(github = githubLink);
    // };

    // const getLinkedIn = (event) => {
    //     let linkedInLink = event.target.linkedIn;
    //     if (!linkedInLink) {
    //         linkedInLink = user.linkedIn;
    //     }
    //     setLinkedIn(linkedInLink);
    //     updateStatus(linkedIn = linkedInLink);
    // };

    return (
        <div>
            <Row>
                <Col s={6} lg={10}>
                    <UserEdit />
                    <h3>{status.username}</h3>
                </Col>
            </Row>
            <Row>
                <Col s={2} lg={4}>
                    <img src={<ProfileImage/>} />
                </Col>
                <Col s={4} lg={6}>
                    <h3>My Biography</h3>
                    {(biography) ? <p>{biography}</p> : <p>No biography information has been added. Please add a biography.</p> }
                    {(github) ? <a href={`https://www.github.com/${github}`}>My Github</a> : <p>No Github information added. Please add Github. </p> }
                    {(linkedin) ?<a href={`https://www.linkedin.com/${linkedin}`}>My LinkedIn</a> : <p>No LinkedIn information added. Please add a LinkedIn.</p> }
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* <ul>{getUserSnips}</ul> */}
                </Col>
            </Row>
        </div>

    );
};


export default ProfilePanel;