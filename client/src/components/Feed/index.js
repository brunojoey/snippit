import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loader-spinner';
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
      await asyncForEach(data, async (snip) => {
        const { data } = await usersAPI.getUser(snip.userId)
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
                      {(user.imageUrl)
                        ?
                          <img 
                            src={user.imageUrl}
                            alt='Avatar' 
                            className='feed-user-icon' 
                          />
                        :
                          <FontAwesomeIcon size='3x' className='feed-user-icon' icon={faUserCircle}></FontAwesomeIcon>
                      }
                    </Link>
                  :
                      <></>
                }
              </Col>
              <Col s={8} l={10} className='feed-item-link'>
                <Link to={`/snips/${snip._id}`} style={{ color: '#8d99ae' }}>{snip.tagLine}</Link>
              </Col>
              <Col s={2} l={1}>
                <div className='feed-item-language-icon'>{language.icon}</div>
              </Col>
            </Row>
          );
        })}
      </>
    );
  }

  return (
    <>
      <h2 className='feed-heading'><span style={{ color: '#8d99ae'}}>console.log(</span><span style={{ color: '#ffc857', fontWeight: 'bold' }}>Recent Snips</span><span style={{ color: '#8d99ae'}}>);</span></h2>
      {(snipState) 
        ? 
          renderSnips() 
        : 
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Loader type='Grid' color='#3d99ae' height={128} width={128} timeout={3000} />
          </div>
        }
    </>
  );
}

export default Feed;
