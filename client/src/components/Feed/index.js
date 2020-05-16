import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Collection, CollectionItem, Icon } from 'react-materialize';
import TaglineContext from '../../utils/TaglineContext';
import LanguageContext from '../../utils/LanguageContext';
import snipsAPI from '../../utils/snipsAPI';
import usersAPI from '../../utils/usersAPI';
import './style.css';

function Feed() {
  const [userState, setUserState] = useState(null);
  const [snipState, setSnipState] = useState(null);

  const { taglines, updateTaglines } = useContext(TaglineContext);
  const { language } = useContext(LanguageContext);

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  useEffect(() => {
    async function fetchData() {
      let { data } = await snipsAPI.getSnips();
      console.log('DATA: ', data);
      let snips = data;
      let users = [];

      console.log('SNIPS: ', snips);
      // Get snips and filter them if needed.
      if (language.length > 0) { snips = snips.filter(snip => (!snip.isResponse && snip.language === language)); }
      if (taglines.length > 0) {
        snips = snips.filter(snip => {
          console.log('SNIP: ', snip);
          const snipWords = snip.tagLine.split(' ');
          const found = snipWords.some(word => taglines.includes(word.toLowerCase()));

          return found;
        });
      }
      
      // Get users for each snip.
      snips = snips.splice(0, 10);
      await asyncForEach(snips, async (snip) => {
        const response = await usersAPI.getUser(snip.userId)
        users.push(response.data);
      });
      
      setSnipState(snips);
      setUserState(users);
    }
    fetchData();

  }, [language, taglines]);

  function renderSnips() {
    return (
      <>
        <h2 className='center'>Recent Snips</h2>
        <Collection>
          {snipState.map((snip, index) => {
            let user;
            if (userState) { user = userState.find(user => user._id === snip.userId) };

            return(
              <CollectionItem className='avatar' key={index}>
                <Row>
                  <Col s={2}>
                    <img alt='Avatar' className='circle' src={(user) ? user.imageUrl : 'https://picsum.photos/200'} />
                  </Col>
                  <Col s={9}>
                    <span className='title'>{snip.tagLine}</span>
                  </Col>
                  <Col s={2}>
                    <Link to={`/snips/${snip._id}`} className='secondary-content'><Icon>Go</Icon></Link>
                  </Col>
                </Row>
              </CollectionItem>
            );
          })}
        </Collection>
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
