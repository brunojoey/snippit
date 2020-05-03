import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Collection, CollectionItem, Icon, Button, Collapsible, CollapsibleItem, Chip } from 'react-materialize';
import StatusContext from '../../utils/StatusContext';
import usersAPI from '../../utils/usersAPI';
import snipsAPI from '../../utils/snipsAPI';
import Editor from '../../components/Editor';
import './style.css';

function Snip(props) {
  console.log('PROPS: ', props);
  const { status } = useContext(StatusContext);
  const signedIn = (status.status !== false)    // True when user is signed in.

  // Form state.
  const [form, setForm] = useState({
    form: false,
    block: false
  });

  // State is the snip data retrieved from snipAPI.
  const [state, setState] = useState(null);

  useEffect(() => {
    
    // Fetch snip data.
    async function fetchData() {
      const { data } = await snipsAPI.getSnip(props.match.params.id);
      console.log('DATA: ', data);
      setState({ ...data });
    }
    fetchData();

  }, []);

  function displayBlock() {
    // console.log('DISPLAY-BLOCK: ', form);
    return (
      <div>
        <Editor language={state.language} code='' readOnly={false} />
        <Button 
          type='button' 
          node='button' 
          name='minus-btn' 
          onClick={() => setForm({ form: true, block: false })}
        >
          <i className='fa fa-minus'></i>
        </Button>
      </div>
    );
  }

  function displayBlockBtn() {
    console.log('DISPLAY-BLOCK-BTN: ', form);
    return (
      <Button 
        type='button' 
        node='button' 
        name='code-btn' 
        onClick={() => setForm({ form: true, block: true })}
      >
        <i className='fa fa-code'></i>
      </Button>
    );
  }
  
  function renderForm() {
    console.log('INSIDE RENDER-FORM');
    console.log('FORM: ', form);
    if (form.form) {
      return (
        <>
          <form>
            <textarea></textarea>
            {(form.block) ? displayBlock() : displayBlockBtn() }
          </form>
        </>
      );
    }
    // Don't show form.
    return <></>;
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
            <Button 
              type='button' 
              node='button' 
              name='response-btn' 
              onClick={() => setForm({ form: !form.form, block: false })}
            >
              {(form.form) ? 'Nevermind' : 'Add Response' }
            </Button>
          </Col>
          <Col s={8} offset='s2'>
            {(state) ? renderForm() : <></>}
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    </>
  );
}

export default Snip;
