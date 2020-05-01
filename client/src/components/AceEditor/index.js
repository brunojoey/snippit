import React from "react";
import AceEditor from "react-ace";
import { Row, Col } from 'react-materialize';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';
import './editor.css'

function SnipEditor() {
    function onChange(newValue) {
        console.log("change", newValue);
    }

    return (
        <div className="editor-container">
            <Row>
                <Col s={12} m={6} offset='m3' className="editor-spacing">
                    <h4>
                        JavaScript Editor
                    </h4>
                    <AceEditor
                        placeholder="Placeholder Text"
                        mode="javascript"
                        theme="monokai"
                        name="UNIQUE_ID_OF_DIV"
                        onChange={onChange}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={'Try out your js()=> with AceEditor!'}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true,
                            tabSize: 2,
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col s={12} m={6} offset='m3' className="editor-spacing">
                    <h4>
                        HTML Editor
                    </h4>
                    <AceEditor
                        placeholder="Placeholder Text"
                        mode="html"
                        theme="monokai"
                        name="UNIQUE_ID_OF_DIV"
                        onChange={onChange}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={'Try out your <HTML> with AceEditor!'}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true,
                            tabSize: 2,
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col s={12} m={6} offset='m3' className="editor-spacing">
                    <h4>
                        CSS Editor
                    </h4>
                    <AceEditor
                        placeholder="Placeholder Text"
                        mode="css"
                        theme="monokai"
                        name="UNIQUE_ID_OF_DIV"
                        onChange={onChange}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={'Try out your .CSS with AceEditor!'}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true,
                            tabSize: 2,
                        }}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default SnipEditor;



