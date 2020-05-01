import React from 'react';
import AceEditor from '../components/AceEditor';
import { Row } from 'react-materialize';

function Editor() {
    return (
        <div className="container">
            <Row>
                <AceEditor></AceEditor>
            </Row>
        </div>
    );
}

export default Editor;