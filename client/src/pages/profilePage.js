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
    </>
  );
};

export default Profile;
