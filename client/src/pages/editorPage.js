import React from 'react';
import SnipEditor from '../components/AceEditor';
import { Row, Col } from 'react-materialize';

function Editor() {
    return (
        <div className='container' id='UNIQUE_ID_OF_DIV'>
            <Row>
                <Col s={12} m={6} offset='m3'>
                    <SnipEditor />
                </Col>
            </Row>
        </div>
    );
}

export default Editor;