import React, { useState, useContext, useRef, useEffect } from 'react';
import { Row, Col, TextInput, Select, Button } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote, faCode, faMinus } from '@fortawesome/free-solid-svg-icons';
import StatusContext from '../../utils/StatusContext';
import snipsAPI from '../../utils/snipsAPI';
import Editor from '../../components/Editor';
import './style.css';

function Form(props) {
  // Couldn't use state for code because state rerenders emptied the ace object.
  let aceCode = '';

  // Currently logged in user.
  const { status } = useContext(StatusContext);

  // True when user adds a block of code to his/her snip.
  const [block, setBlock] = useState(false);
  const [message, setMessage] = useState('');

  // Form information that will be used to create snip.
  const [state, setState] = useState({
    isResponse: props.isResponse,
    language: ((props.language) ? props.language : 'javascript'),
    tagLine: null,
    body: '',
    code: '',
    userId: status._id,
  });

  useEffect(() => {
    // Used to handle form submission.
    async function fetchData() {
      if (message === 'valid') {
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
  
  function handleChange(event) {
    setMessage('');
    // Ace editor onChange event overrides event and returns the string.
    if (typeof event === 'string') { 
      aceCode = event;
      return;
    }

    const name = event.target.name;
    setState({ ...state, [name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!state.tagLine || state.tagLine.length < 20) { setMessage('Tagline must be more than 20 characters.'); return; }
    else if (state.body.length < 40) { setMessage('Body contents must be great than 40 characters.'); return; }
    else if (aceCode.length > 0 && aceCode.length < 20) { setMessage('Code content must be greater than 20 characters.'); return; }
    else { setMessage('valid') }

    setState({ ...state, code: aceCode });
  }

  function handleKeyDown(event) {
    event.target.style.height = 'inherit';
    event.target.style.height = `${event.target.scrollHeight}px`; 
  }

  function displayBlock() {
    return (
      <>
        <Editor handleChange={handleChange} language={state.language} code='' readOnly={false} />
        {(message.includes('Code')) ? <div className='snip-body-error'>{message}</div> : <></>}
      </>
    );
  }
  
  function displayBlockBtn() {
    return (
      <button type='button' name='code-btn' className='form-button button-with-icon' onClick={() => setBlock(true)}>
        <span className='form-button-text'>Code</span>
        <FontAwesomeIcon size='2x' icon={faCode} className='form-button-icon'></FontAwesomeIcon>
      </button>
    );
  }

  function removeBlockBtn() {
    return (
      <button type='button' name='minus-btn' className='form-button button-with-icon' onClick={() => setBlock(false)}>
        <span className='form-button-text'>Code</span>
        <FontAwesomeIcon size='2x' icon={faMinus} className='form-button-icon'></FontAwesomeIcon>
      </button >
    );
  }

  // Additional information required when user is create a snip vs just responding to one.
  function showAdditional() {
    return (
      <>
        <Row className='no-bottom'>
            <Col m={8}>
              <TextInput className='tagLine' name='tagLine' placeholder="Tagline goes here." noLayout onChange={handleChange}/>
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
        {(message.includes('Tagline')) ? <div className='tagline-error'>{message}</div> : <></>}
      </>
    );
  }
  
  function renderForm() {
    return (
      <>
        <form method='post'>
          {(!state.isResponse) ? showAdditional() : <></> }
          <button type='submit' name='submit' className='form-button button-with-icon' onClick={handleSubmit}>
            <span className='form-button-text'>Snip It</span>
            <FontAwesomeIcon size='2x' icon={faStickyNote} className='form-button-icon'></FontAwesomeIcon>
          </button>
          {(block) ? removeBlockBtn() : displayBlockBtn() }
          <textarea name='body' className='form-textarea' onChange={handleChange} onKeyDown={handleKeyDown}></textarea>
          {(block) ? displayBlock() : <></> }
          {(message.includes('Body')) ? <div className='snip-body-error'>{message}</div> : <></>}
        </form>
      </>
    );
  }

  return (
    <>{renderForm()}</>
  );
}

export default Form;
