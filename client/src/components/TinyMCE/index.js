import React from 'react';
import { Editor } from '@tinymce/tinymce-react';


class TinyMCE extends React.Component {
    handleEditorChange = (content, editor) => {
      console.log('Content was updated:', content);
    }
 
    render() {
        console.log('API ', process.env.REACT_APP_TINY_MCE_API);
      return (
        <Editor
          initialValue='<p>This is the initial content of the editor</p>'
          apiKey={process.env.REACT_APP_TINY_MCE_API}
          init={{
            height: 500,
            width: 600,
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
          onEditorChange={this.handleEditorChange}
        />
      );
    }
  }
 
export default TinyMCE;