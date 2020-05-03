import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-materialize';
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

  useEffect(() => {
    
    // Fetch snip data.
    async function fetchData() {
      const { data } = await snipsAPI.getSnip(props.match.params.id);
      console.log('DATA: ', data);
      setState({ ...data });
    }
    fetchData();

  }, []);

  function checkRedirect() {
    if (redirect) { return <Redirect to={redirect} /> };
  }

  function renderSnip() {
    let code = state.body.split(/<code>|<\/code>/);

    return (
      <>
        <h2>{state.tagLine}</h2>
        <div>
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
        <Row>
          
        </Row>
      </Container>
    </>
  );
}

export default Snip;
