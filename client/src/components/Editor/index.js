import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-cobalt';
import 'ace-builds/src-noconflict/theme-clouds';
import './style.css';

function Editor({ readOnly, code, language, handleChange }) {
  const [options, setOptions] = useState({
    value: '',
    theme: '',
  })

  useEffect(() => {
    if (readOnly) {
      setOptions({
        ...options,
        value: code,
        theme: 'cobalt',
      })
    } else {
      setOptions({
        ...options,
        theme: 'clouds',
      })
    }
  }, []);

  function onChange(newValue) {
    setOptions({ ...options, value: newValue });
    handleChange(newValue);
  }

  // Render editor
  return (
    <AceEditor
      readOnly={readOnly}
      mode={language}
      value={options.value}
      theme={options.theme}
      minLines={5}
      maxLines={30}
      onChange={onChange}
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
