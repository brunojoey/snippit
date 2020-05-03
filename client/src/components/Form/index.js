import React, { useState, useContext } from 'react';
import { Button } from 'react-materialize';
import StatusContext from '../../utils/StatusContext';
import snipsAPI from '../../utils/snipsAPI';
import Editor from '../../components/Editor';
import './style.css';

function Form(props) {
  // Values added to form information state when submit button is clicked.
  let aceCode = '';
  let text = '';

  // Currently logged in user.
  const { status } = useContext(StatusContext);

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

  function handleChange(event) {
    // Ace editor onChange hijacks regular event. Workaround with if else.
    (typeof event === 'string') ? aceCode = event : text = event.target.value;
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
    console.log('HANDLE-SUBMIT');
    event.preventDefault();

    if (aceCode.length < 1 && state.body.length < 1) { return console.log('NOTHING ENTERED') }
    setState({ ...state, code: aceCode, body: text });

    await snipsAPI.createSnip(state).then(async ({ data }) => {
      console.log('NEW SNIP: ', data);
  
      console.log('IS RESPONSE: ', props.isResponse);
      // If this is a response, stay on current page. If this is an initial snip, redirect.
      if (props.isResponse) {
        console.log('IN IF');
        // insert id of response into response array of current page's id.
        console.log('PROPS.SNIP-ID: ', props.snipId);
        console.log('DATA._ID: ', data._id)
        const response = await snipsAPI.updateSnip(props.snipId, { $push: { responses: data._id } });
        console.log('RESPONSE; ', response);
      } else {
        console.log('IN ELSE');
        props.setRedirect('/snips/' + data._id);
      }
    });
  }
  
  function renderForm() {
    return (
      <>
        <form>
          <textarea name='body' onChange={handleChange}></textarea>
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
    <>
      {renderForm()}
    </>
  );
}

export default Form;
