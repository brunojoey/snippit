import React, { useState, useEffect, useContext } from 'react';
import { Button, TextInput, Row, Col, Select } from 'react-materialize';
import snipsAPI from '../../utils/snipsAPI';
import StatusContext from '../../utils/StatusContext';
import TinyMCE from '../TinyMCE';
import './style.css';

function SnipForm() {
  const { status } = useContext(StatusContext);
  const [state, setState] = useState({
    tagLine: '',
    language: 'javascript',
    body: '',
    userId: '',
  });

  useEffect(() => {
    console.log('USER ID: ', status._id);
    setState({ ...state, userId: status._id });
  }, [status])

  function handleChange(event) {
    const name = event.target.name;
    setState({ ...state, [name]: event.target.value })
  }
  
  async function handleSubmit(event) {
    event.preventDefault();

    console.log('STATE: ', state);
    snipsAPI.createSnip(state);
  }

  return (
    <form method='post'>
      <Row className='mb-0'>
          <Col m={8}>
            <TextInput className='tagLine' name='tagLine' placeholder="What's your question?" noLayout onChange={handleChange} />
          </Col>
          <Col m={4}>
            <Select
              name='language'
              id='select-language'
              multiple={false}
              onChange={handleChange}
              value=''
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
      <Row>
        <TinyMCE state={state} setState={setState} />
      </Row>
      <Row>
        <div className='center'>
          <Button node='button' onClick={handleSubmit}>Snip It!</Button>
        </div>
      </Row>
    </form>
  );
}

export default SnipForm;
