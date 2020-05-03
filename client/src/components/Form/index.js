import React, { useState } from 'react';
import { Button } from 'react-materialize';
import Editor from '../../components/Editor';
import './style.css';

function Form(props) {

  // Form state.
  const [block, setBlock] = useState(false);

  function displayBlock() {
    return (
      <div>
        <Editor language={props.language} code='' readOnly={false} />
        <Button 
          type='button' 
          node='button' 
          name='minus-btn' 
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
        type='button' 
        node='button' 
        name='code-btn' 
        onClick={() => setBlock(true)}
      >
        <i className='fa fa-code'></i>
      </Button>
    );
  }
  
  function renderForm() {
    return (
      <>
        <form>
          <textarea></textarea>
          {(block) ? displayBlock() : displayBlockBtn() }
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
