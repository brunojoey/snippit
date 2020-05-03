import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Collection, CollectionItem, Icon, Button, Collapsible, CollapsibleItem, Chip } from 'react-materialize';
import StatusContext from '../utils/StatusContext';
import usersAPI from '../utils/usersAPI';
import snipsAPI from '../utils/snipsAPI';
// import SnipEditor from '../components/AceEditor';
import Editor from '../components/Editor';

function Snip(props) {
  console.log('PROPS: ', props);
  console.log('ID: ', props.match.params.id);
  const { status } = useContext(StatusContext);
  const signedIn = (status.status !== false)    // True when user is signed in.

  const [state, setState] = useState(null);

  
  useEffect(() => {
    
    async function fetchData() {
      const { data } = await snipsAPI.getSnip(props.match.params.id);
      console.log('DATA: ', data);
      setState({ ...data });
    }
    fetchData();
    
    console.log('STATE: ', state);
    
  }, []);
  
  function renderSnip() {
    let language = state.language;
    let code = state.body.split(/<code>|<\/code>/);
    console.log('LANGUAGE: ', language);
    console.log('CODE: ', code);

    return (
      <>
        <h2>{state.tagLine}</h2>
        <div>
          <Editor language={language} code={code[1]} readOnly={true} />
        </div>
      </>
    );
  }

  return (
    <>
      <Container>
        <Row>
          <Col s={8} offset='s2'>
            {(state) ? renderSnip() : <></>}
          </Col>
        </Row>
        <Row>
          <Col s={8} offset='s2'>
            <Button type='button'>Give Answer</Button>
          </Col>
          <Col s={8} offset='s2'>
          </Col>
        </Row>
        <Row>
          Add responses.
        </Row>
      </Container>
    </>
  );
}

export default Snip;
