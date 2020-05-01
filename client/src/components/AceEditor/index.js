import React from "react";
import AceEditor from "react-ace";
import 'ace-builds/src-noconflict/mode-javascript';

function SnipEditor() {
    function onChange(newValue) {
        console.log("change", newValue);
    }
    
    return(
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
            value={'Try out your coding with AceEditor!'}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
            }}
        />
    );
}

export default SnipEditor;



