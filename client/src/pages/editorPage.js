import React from 'react';
import SnipEditor from '../components/AceEditor';
import { Row } from 'react-materialize';

function Editor() {
    return (
        <div className='container' id='UNIQUE_ID_OF_DIV'>
            <Row>
                <SnipEditor />
            </Row>
        </div>
    );
}

export default Editor;