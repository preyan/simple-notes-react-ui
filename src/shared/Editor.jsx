import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TinyEditor = ({ setNoteResponse }) => {
  const editorRef = useRef(null);
  const handleSaveEvent = () => {
    if (editorRef.current) {
      setNoteResponse(editorRef.current.getContent());
      //   console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue='<p>This is the initial content of the editor.</p>'
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded'
        onClick={handleSaveEvent}
      >
        Save
      </button>
    </>
  );
};

export default TinyEditor;
