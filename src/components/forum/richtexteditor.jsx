import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function Texteditor() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
       apiKey='uut5d8hq73fmfohf3sek7qvaj0mnfc9m2st5jfn4k3615spp' 
        onInit={(evt, editor) => editorRef.current = editor}
         onReceiveFocus={(editor) => editor.focus()}
         textareaName='content'
         tagName='textarea'
         id="IDtextarea"
        initialValue=""
        init={{
          height: 240,
          editable_class: 'mceEditable',
          menubar: true,
          placeholder: 'Write out your post here!',
          toolbar_sticky: true,
          toolbar_sticky_offset: 100,
          fixed_toolbar_container: '#editortoolbar',
          plugins: [
            'wordcount','advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
            'anchor', 'searchreplace', 'visualblocks', 'fullscreen',
            'insertdatetime',  'table', 'preview', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | link image | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Open Sans-Regular;font-size: 1rem}'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}