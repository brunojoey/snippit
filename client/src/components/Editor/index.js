import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-cobalt';
import 'ace-builds/src-noconflict/theme-clouds';
import './style.css';

function Editor(props) {
  const [options, setOptions] = useState({
    value: '',
    theme: '',
  })

  useEffect(() => {
    if (props.readOnly) {
      setOptions({
        ...options,
        value: props.code,
        theme: 'cobalt',
      })
    } else {
      setOptions({
        ...options,
        theme: 'clouds',
      })
    }
  }, []);

  function onChange(newValue, event) {
    console.log("change", newValue);
    console.log('event: ', event)
  }

  // Render editor
  return (
    <AceEditor
      readOnly={props.readOnly}
      mode={props.language}
      value={options.value}
      theme={options.theme}
      minLines={5}
      maxLines={30}
      onChange={props.handleChange}
      name='editor'
      width='auto'
      placeholder='Enter code.'
      highlightActiveLine={true}
      editorProps={{ $blockScrolling: true }}
      showLineNumbers={true}
      showGutter={true}
      showPrintMargin={false}
      tabSize={4}
    />
  );
}

export default Editor;
