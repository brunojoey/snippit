import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Button, Collection, CollectionItem } from 'react-materialize';
import StatusContext from '../../utils/StatusContext';
import usersAPI from '../../utils/usersAPI';
import snipsAPI from '../../utils/snipsAPI';
import Editor from '../../components/Editor';
import Form from '../../components/Form';
import './style.css';

function Snip(props) {
  const { status } = useContext(StatusContext);
  const loggedIn = (status.status !== false)    // True when user is signed in.
  
  // State is the snip data retrieved from snipAPI.
  const [state, setState] = useState(null);
  const [form, setForm] = useState(false);
  const [redirect, setRedirect] = useState(null);

  const [responses, setResponses] = useState(null);
  const [users, setUsers] = useState(null);

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  useEffect(() => {
    
    // Fetch snip data.
    async function fetchData() {
      const { data } = await snipsAPI.getSnip(props.match.params.id);
      setState({ ...data });
    }
    fetchData();

  }, []);

  useEffect(() => {
    if (state && state.responses.length > 1) {

      async function fetchData() {
        let responses = [];
        let users = [];
        
        // Get users for each response
        await asyncForEach(state.responses, async (response) => {
          const { data } = await snipsAPI.getSnip(response);
          const user = await usersAPI.getUser(data.userId)

          responses.push(data);
          users.push(user.data);
        });
  
        setResponses(responses);
        setUsers(users);
      }
      fetchData();


    } else {
      console.log('No responses yet.')
    }

  }, [state]);

  function checkRedirect() {
    if (redirect) { return <Redirect to={redirect} /> };
  }

  function renderSnip() {
    let code = state.code.split(/<code>|<\/code>/);

    return (
      <>
        <h2>{state.tagLine}</h2>
        <div>
          <textarea readOnly value={state.body}></textarea>
          <Editor language={state.language} code={code[1]} readOnly={true} />
        </div>
      </>
    );
  }

  function renderForm() {
    return (
      <Col s={8} offset='s2'>
        <Form 
          setForm={setForm}
          setRedirect={setRedirect}
          snipId={props.match.params.id} 
          language={state.language}
          isResponse={true} />
      </Col>
    );
  }

  function renderResponseBtn() {
    return (
      <Row>
        <Col s={8} offset='s2'>
          <Button 
            type='button' 
            node='button' 
            name='response-btn' 
            onClick={() => setForm(!form)}
          >
            {(form) ? 'Nevermind' : 'Add Response' }
          </Button>
        </Col>
        {(form) ? renderForm() : <></>}
      </Row>
    );
  }

  function renderResponses() {
    return(
      <Row>
        <h2 className='center'>Responses</h2>
        <Collection>
          {responses.map((response, index) => {
            const user = users.find(user => user._id === response.userId);

            return(
              <CollectionItem className='avatar' key={index}>
                <Row>
                  <Col s={2}>
                    <img alt='Avatar' className='circle' src={(user.imageUrl.length > 0) ? user.imageUrl : 'https://picsum.photos/200'} />
                  </Col>
                  <Col s={10}>
                    <textarea readOnly>{response.body}</textarea>
                    {(response.code.length > 0) ? <Editor language={response.language} code={response.code} readOnly={true} /> : <></>}
                  </Col>
                </Row>
              </CollectionItem>
            );
          })}
        </Collection>
      </Row>
    );
  }

  return (
    <>
      {checkRedirect()}
      <Container>
        <Row>
          <Col s={8} offset='s2'>
            {(state) ? renderSnip() : <></>}
          </Col>
        </Row>
        {(loggedIn) ? renderResponseBtn() : <></>}
        {(responses && users) ? renderResponses() : <></>}
      </Container>
    </>
  );
}

export default Snip;
