import React, { useState, useContext, useRef, useEffect } from 'react';
import { Button } from 'react-materialize';
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
    language: props.language,
    body: '',
    code: '',
    userId: status._id,
  });

  useEffect(() => {
    // Used to handle form submission.
    async function fetchData() {
      if (state.isResponse && (state.body.length > 1 || state.code.length > 1)) {

        // Create new response snip and add it to the main snip's responses array.
        const { data } = await snipsAPI.createSnip(state);
        const response = await snipsAPI.updateSnip(props.snipId, { $push: { responses: data._id } });

        // Reset values.
        props.setForm(false);
        props.setResponses([ ...props.responses, data]);
      } else {
        // const { data } = await snipsAPI.createSnip(state);
        // props.setRedirect('/snips/' + data._id);
      }

    }
    fetchData();

  }, [state]);

  function handleChange(code) {
    aceCode = code;
  }

  function displayBlock() {
    return (
      <div>
        <Editor handleChange={handleChange} language={props.language} code='' readOnly={false} />
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

  async function handleSubmit(event) {
    event.preventDefault();
    const body = bodyRef.current.value;

    if (aceCode.length < 1 && body.length < 1) { console.log('No data was entered.') }
    setState({ ...state, code: aceCode, body: body });
  }
  
  function renderForm() {
    return (
      <>
        <form>
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
    <> {renderForm()}</>
  );
}

export default Form;
