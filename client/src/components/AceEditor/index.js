import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

function onChange(newValue) {
    console.log("change", newValue);
}

// Render editor
render(
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
        value={''}
        setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: false,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
        }}
    />
);

export default AceEditor;



