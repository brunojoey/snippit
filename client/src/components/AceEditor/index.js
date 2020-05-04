import React from "react";
import AceEditor from "react-ace";
import { Row, Col, Tabs, Tab } from 'react-materialize';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-clouds';
import './editor.css'

function SnipEditor() {
    function onChange(newValue) {
        console.log("change", newValue);
    }

    return (
        <div className="container">
            <Row>
                <Col s={12} m={6} offset='m3' className="editor-spacing">
                    <Tabs className='tab-demo z-depth-1 tabs-fixed-width' options={{ swipeable: false }}>
                        <Tab className='tab-style'
                            options={{
                                duration: 150,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title='JS'>
                            <AceEditor
                                placeholder="Placeholder Text"
                                mode="javascript"
                                theme="clouds"
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
                        </Tab>
                        <Tab options={{
                            duration: 150,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                        }}
                            title='HTML'>
                            <AceEditor
                                placeholder="Placeholder Text"
                                mode="html"
                                theme="twilight"
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
                        </Tab>
                        <Tab options={{
                            duration: 150,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                        }}
                            title='CSS'>
                            <AceEditor
                                placeholder="Placeholder Text"
                                mode="css"
                                theme="twilight"
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
                        </Tab>
                        <Tab options={{
                            duration: 150,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                        }}
                            title='Python'>
                            <AceEditor
                                placeholder="Placeholder Text"
                                mode="python"
                                theme="twilight"
                                name="UNIQUE_ID_OF_DIV"
                                onChange={onChange}
                                fontSize={14}
                                showPrintMargin={true}
                                showGutter={true}
                                highlightActiveLine={true}
                                value={'Try out your PY >>> with AceEditor!'}
                                setOptions={{
                                    enableBasicAutocompletion: true,
                                    enableLiveAutocompletion: true,
                                    enableSnippets: true,
                                    showLineNumbers: true,
                                    tabSize: 2,
                                }}
                            />
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </div>
    );
}

export default SnipEditor;



