import React, { useState, useEffect, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-materialize';
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

  const [responses, setResponses] = useState([]);
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

  });

  useEffect(() => {
    if (state) {

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

  function renderSnip() {
    let code = state.code;

    return (
      <>
        <h2 className='snip-header'>{state.tagLine}</h2>
        <hr></hr>
        <div className='snip-content'>
          <div className='snip-body'>{state.body}</div>
          <Editor language={state.language} code={code} readOnly={true} />
        </div>
      </>
    );
  }

  function renderForm() {
    return (
      <Col s={12} m={8} offset='m2'>
        <Form 
          responses={responses}
          setResponses={setResponses}
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
        <Col s={12} m={8} offset='m2' style={{ paddingTop: '16px' }}>
          <div className='center'>
            <button type='button' name='response-btn' className='snip-page-button' onClick={() => setForm(!form)}>
              <span className='snip-page-button-text'>{(form) ? 'Clear' : 'Answer' }</span>
            </button>
          </div>
          <hr></hr>
        </Col>
        {(form) ? renderForm() : <></>}
      </Row>
    );
  }

  function renderResponses() {
    return(
      <>
        <h2 className='snip-response-header'>Responses</h2>
        <hr></hr>
        <div className='snip-content'>
          {responses.map((response, index) => {
            const user = users.find(user => user._id === response.userId);

            return(
              <Row className='response-item' key={index}>
                <Col s={12} m={2} l={1} className='center'>
                  {(user) 
                    ? 
                    <Link to={`/users/${user._id}`}>
                      <img 
                        src={user.imageUrl}
                        alt='Avatar' 
                        className='response-user-icon' 
                        style={{ width: '32px', height: '32px'  }}
                      />
                    </Link>
                    :
                    <p>Icon</p>
                  }
                </Col>
                <Col s={12} m={10} l={11}>
                  <div className='response-body'>{response.body}</div>
                  <div>
                    {(response.code.length > 0) ? <Editor language={response.language} code={response.code} readOnly={true} /> : <></>}
                  </div>
                </Col>
              </Row>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <>
      {(redirect !== null) ? <Redirect push to={redirect} /> : <></>}
      <Container>
        <div className='snip-page-container'>
          <Row>
            <Col s={12} xl={10} offset='xl1'>
              {(state) ? renderSnip() : <></>}
            </Col>
          </Row>
          {(loggedIn) ? renderResponseBtn() : <></>}
          <Row>
            <Col s={12} xl={10} offset='xl1'>
              {(responses && users) ? renderResponses() : <></>}
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Snip;
