import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

function TinyMCE(props) {

  // Propogate state to SnipForm on input change.
  function handleEditorChange(content, editor) {
    props.setState({ ...props.state, body: content });
  }
 
  return (
    <Editor
      apiKey={process.env.REACT_APP_TINY_MCE_API}
      init={{
        height: 250,
        width: 'auto',
        menubar: false,
        plugins: [
          'codesample advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'codesample undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help'
      }}
      onEditorChange={handleEditorChange}
    />
  );
}
 
export default TinyMCE;
