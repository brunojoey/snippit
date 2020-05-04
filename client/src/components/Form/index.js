import React, { useState, useContext, useRef, useEffect } from 'react';
import { Row, Col, TextInput, Select, Button } from 'react-materialize';
import StatusContext from '../../utils/StatusContext';
import snipsAPI from '../../utils/snipsAPI';
import Editor from '../../components/Editor';
import './style.css';

function Form(props) {
  // Couldn't use state for code because state rerenders emptied the ace object.
  let aceCode = '';

  // Currently logged in user.
  const { status } = useContext(StatusContext);
  const bodyRef = useRef();

  // True when user adds a block of code to his/her snip.
  const [block, setBlock] = useState(false);

  // Form information that will be used to create snip.
  const [state, setState] = useState({
    isResponse: props.isResponse,
    language: ((props.language) ? props.language : 'javascript'),
    body: '',
    code: '',
    userId: status._id,
  });

  useEffect(() => {
    // Used to handle form submission.
    async function fetchData() {
      if (state.body.length > 0 || state.code.length > 0) {
        if (state.isResponse) {
  
          // Create new response snip and add it to the main snip's responses array.
          const { data } = await snipsAPI.createSnip(state);
          const response = await snipsAPI.updateSnip(props.snipId, { $push: { responses: data._id } });
  
          // Reset values.
          props.setForm(false);
          props.setResponses([ ...props.responses, data]);
        } else {
          const { data } = await snipsAPI.createSnip(state);
          props.setRedirect('/snips/' + data._id);
        }
      }
    }
    fetchData();

  }, [state]);
  
  function displayBlock() {
    return (
      <div>
        <Editor handleChange={handleChange} language={state.language} code='' readOnly={false} />
        <Button 
          type='button' node='button' name='minus-btn' 
          onClick={() => setBlock(false)}
          >
          <i className='fa fa-minus'></i>
        </Button>
      </div>
    );
  }
  
  function displayBlockBtn() {
    return (
      <Button 
      type='button' node='button' name='code-btn' 
      onClick={() => setBlock(true)}
      >
        <i className='fa fa-code'></i>
      </Button>
    );
  }
  
  function handleChange(event) {
    // Ace editor onChange event overrides event and returns the string.
    if (typeof event === 'string') { 
      aceCode = event;
      return;
    }

    const name = event.target.name;
    setState({ ...state, [name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const body = bodyRef.current.value;

    if (aceCode.length < 1 && body.length < 1) { console.log('No data was entered.'); return; }
    setState({ ...state, code: aceCode, body: body });
  }

  // Additional information required when user is create a snip vs just responding to one.
  function showAdditional() {
    return (
      <Row className='no-bottom'>
          <Col m={8}>
            <TextInput className='tagLine' name='tagLine' placeholder="What's your question?" noLayout onChange={handleChange} />
          </Col>
          <Col m={4}>
            <Select
              name='language'
              id='select-language'
              multiple={false}
              onChange={handleChange}
              value='javascript'
              options={{
                classes: '',
                dropdownOptions: {
                  alignment: 'left',
                  autoTrigger: true,
                  closeOnClick: true,
                  constrainWidth: true,
                  coverTrigger: true,
                  hover: false,
                  inDuration: 150,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 250
                }
              }}
            >
              <option value='javascript'>JavaScript</option>
              <option value='html'>HTML</option>
              <option value='css'>CSS</option>
              <option value='python'>Python</option>
            </Select>
          </Col>
      </Row>
    );
  }
  
  function renderForm() {
    return (
      <>
        <form method='post'>
          {(!state.isResponse) ? showAdditional() : <></>}
          <textarea name='body' ref={bodyRef}></textarea>
          {(block) ? displayBlock() : displayBlockBtn() }
          <Button
            type='submit' node='button' name='submit'
            onClick={handleSubmit}
          >
            Snippit!
          </Button>
        </form>
      </>
    );
  }

  return (
    <>{renderForm()}</>
  );
}

export default Form;
