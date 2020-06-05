<<<<<<< HEAD
import React, { useEffect, useContext, useState } from 'react';
import ProfilePanel from '../components/Profile/index.js';
import Foot from '../components/Footer';
import { Row } from 'react-materialize';
import usersAPI from '../utils/usersAPI';
import StatusContext from '../utils/StatusContext';

function Profile() {
  const { status } = useContext(StatusContext);

  const [biography, setBiography] = useState();
  const [github, setGithub] = useState();
  const [linkedin, setLinkedin] = useState();

  useEffect(() => {
    console.log("STATUS", status);
    async function fetchData() {
        const { data } = await usersAPI.getUser(status._id);
        console.log("USER ID", data);
        if (data.linkedin) { setLinkedin(data.linkedin); }
        if (data.github) { setGithub(data.github); }
        // if (data.biography) { setBiography(data.biography); }
    }
    fetchData();
//     getUser();
//     console.log("USER", user);
//     // Used to handle form submission.
//     async function fetchData() {      
//           // Create new response snip and add it to the main snip's responses array.
//           await usersAPI.updateGithub(githubId, { newGithub: data._id } );
//           await usersAPI.updateLinkedIn(linkedInId, { newLinkedin: data._id } );
    

// //         // reference
//         //   github = newGithub;
//         //   linkedIn = newLinkedin;
//         //   biography = newBio;
  
//           const { data } = await usersAPI.createBio(biography);
//           console.log("BIO", biography = newBio);
//         }

//         fetchData();
}, [github, linkedin, biography] );

  return (
    <>
      <div className="containter home-container">
        <Row>
          <ProfilePanel linkedin={linkedin} github={github} biography={biography} setBiography={setBiography} setLinkedin={setLinkedin} setGithub={setGithub} status={status} />
        </Row>
      </div>
      <>
        <Foot />
      </>
=======
import React, { useEffect, useState } from 'react';
import ProfilePanel from '../components/Profile/index.js';
import { Container, Row } from 'react-materialize';
import usersAPI from '../utils/usersAPI';

function Profile(props) {
  const [state, setState] = useState({
    username: null,
    biography: null,
    github: null,
    linkedin: null,
    id: null,
    imageUrl: null
  });

  useEffect(() => {

    async function fetchData() {
      const id = props.match.url.split('/')[2];
      const { data } = await usersAPI.getUser(id);

      setState({
        username: (data.username) ? data.username : null,
        biography: (data.biography) ? data.biography : null,
        github: (data.github) ? data.github : null,
        linkedin: (data.linkedin) ? data.linkedin : null,
        id: (data._id) ? data._id : null,
        imageUrl: (data.imageUrl) ? data.imageUrl : null
      });
    }
    fetchData();
    
  }, [props.match.url]);

  return (
    <>
      <Container>
        <ProfilePanel state={state} setState={setState} />
      </Container>
>>>>>>> 822366cf2d09d02059eeb54e22add3da80122a70
    </>
  );
};

export default Profile;
