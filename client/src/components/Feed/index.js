import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-materialize';
import snipsAPI from '../../utils/snipsAPI';
import usersAPI from '../../utils/usersAPI';
import { languages } from '../../utils/languages';
import './style.css';

function Feed() {
  const [userState, setUserState] = useState(null);
  const [snipState, setSnipState] = useState(null);

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  useEffect(() => {
    async function fetchData() {
      let { data } = await snipsAPI.getSnips();
      let users = [];
      data = data.filter(snip => snip.tagLine);

      // Get users for each snip.
      data = data.splice(0, 10);
      await asyncForEach(data, async (snips) => {
        const { data } = await usersAPI.getUser(snips.userId)
        users.push(data);
      });
      
      setSnipState(data);
      setUserState(users);
    }
    fetchData();

  }, []);

  function renderSnips() {
    return (
      <>
        <h2 className='feed-heading'>Recent Snips</h2>
        <hr></hr>
        {snipState.map((snip, index) => {
          let user;
          let language = languages.find(language => language.name === snip.language);
          if (userState) { user = userState.find(user => user._id === snip.userId) }

          return (
            <Row className='feed-item' key={index}>
              <Col s={2} l={1} className='rel-wrapper'>
                {(user) 
                  ? 
                  <Link to={`/users/${user._id}`}>
                    <img 
                      src={user.imageUrl}
                      alt='Avatar' 
                      className='feed-user-icon' 
                      style={{ width: '32px', height: '32px'  }}
                    />
                  </Link>
                  :
                  <p>Icon</p>
                }
              </Col>
              <Col s={8} l={10} className='feed-item-link'>
                <Link to={`/snips/${snip._id}`}>{snip.tagLine}</Link>
              </Col>
              <Col s={2} l={1} className='feed-item-language-icon'>
                <div>{language.icon}</div>
              </Col>
            </Row>
          );
        })}
      </>
    );
  }

  return (
    <>
      {(snipState) ? renderSnips() : <p className='center'>No tips for these snips.</p>}
    </>
  );
}

export default Feed;
