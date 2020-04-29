import React from 'react';
import dotenv from 'dotenv';
import { Editor } from '@tinymce/tinymce-react';

dotenv.config();

class TinyMCE extends React.Component {
    handleEditorChange = (content, editor) => {
      console.log('Content was updated:', content);
    }
 
    render() {
        console.log('API ', process.env.TINY_MCE_API);
      return (
        <Editor
          initialValue='<p>This is the initial content of the editor</p>'
          apiKey='i66mp40s3lyquumnuhak0uejhzeaxtb4wdt0tkvzhti8ulba'
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