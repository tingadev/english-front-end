import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
  interface TinyMCETextareaProps {
    textareaName: string;
    onEditorChange: any;
    value: any;
  }

 const TinyMCETextarea : React.FC<TinyMCETextareaProps> = ({onEditorChange, textareaName, ...props}) => {


     return (
       <Editor
         apiKey="f9b9q8eygntqnp8oisdg1ssr6mp1s0e4ydnhym3v1kyidgx1"
         initialValue="<p>This is the initial content of the editor</p>"
         init={{
           height: 400,
           menubar: true,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar:
             'undo redo bold italic underline strikethrough superscript subscript codeformat \
             | formats blockformats fontformats fontsizes align \
             | forecolor backcolor | removeformat \
             | link image charmap print preview anchor \
             | a11ycheck code permanentpen table', 
         }}
         
         onEditorChange={onEditorChange}
         textareaName={textareaName}
         

         {...props}
       />
     );
   }

 export default TinyMCETextarea;