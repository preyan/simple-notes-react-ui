import React from 'react';
import TinyEditor from './Editor';

const Note = ({ isEdit, noteResponse, setNoteResponse }) => {
  console.log('noteResponse', noteResponse);
  return (
    <>
      {isEdit && !noteResponse.length ? (
        <TinyEditor setNoteResponse={setNoteResponse} />
      ) : (
        <div className='bg-white shadow-md rounded-lg p-4 max-w-lg'>
          <div dangerouslySetInnerHTML={{ __html: noteResponse }}></div>
        </div>
      )}
    </>
  );
};

export default Note;
