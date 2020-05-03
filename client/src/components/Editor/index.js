import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-cobalt';
import 'ace-builds/src-noconflict/theme-clouds';

function Editor(props) {
  const [options, setOptions] = useState({
    height: '',
    value: '',
    theme: ''
  })

  useEffect(() => {
    if (props.readOnly) {
      setOptions({
        ...options,
        height: '400px',
        value: props.code,
        theme: 'cobalt'
      })
    } else {
      setOptions({
        ...options,
        height: '200px',
        theme: 'clouds'
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
      height={options.height}
      theme={options.theme}
      onChange={props.handleChange}
      name='editor'
      width='auto'
      highlightActiveLine={true}
      editorProps={{ $blockScrolling: true }}
      enableBasicAutocompletion={true}
      enableLiveAutocompletion={true}
      enableSnippets={true}
      showLineNumbers={true}
      tabSize={4}
    />
  );
}

export default Editor;
