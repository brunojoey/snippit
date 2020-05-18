import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-materialize';
import snipsAPI from '../../utils/snipsAPI';
import usersAPI from '../../utils/usersAPI';
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
        <h2 className='center'>Recent Snips</h2>
        {snipState.map((snip, index) => {
          let user;
          if (userState) { user = userState.find(user => user._id === snip.userId) }

          return (
            <Row className='feed-item'>
              <Col s={10}>
                <Link to={`/snips/${snip._id}`}>{snip.tagLine}</Link>
              </Col>
              <Col s={2}>
                {(user) 
                  ? 
                  <Link to={`/users/${user._id}`}>
                    <img 
                      src={user.imageUrl}
                      alt='Avatar' 
                      className='user-icon' 
                      style={{ width: '32px', height: '32px'  }}
                    />
                  </Link>
                  :
                  <p>Icon</p>
                }
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
