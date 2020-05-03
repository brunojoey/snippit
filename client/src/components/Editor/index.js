import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-cobalt';

function Editor(props) {
  const [height, setHeight] = useState();

  console.log('PROPS.CODE: ', props.code);

  useEffect(() => {
    (props.readOnly) ? setHeight('200px') : setHeight('300px');
  }, []);

  function onChange(newValue) {
    console.log("change", newValue);
  }

  // Render editor
  return (
    <AceEditor
      readOnly={props.readOnly}
      mode={props.language}
      value={props.code}
      height={height}
      onChange={onChange}
      theme='cobalt'
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
