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
    </>
  );
};

export default Profile;
