import React from 'react';
import SnipEditor from '../components/AceEditor';
// import Selector from '../components/CodeSelector';
// import { Row, Col } from 'react-materialize';

function Editor() {
    return (
        <div className='container' id='UNIQUE_ID_OF_DIV'>
            <SnipEditor />
        </div>
    );
}

export default Editor;