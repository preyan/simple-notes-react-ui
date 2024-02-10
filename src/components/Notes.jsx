import React, { useState } from 'react';
import Note from '../shared/Note';

const Notes = () => {
  const [noteResponse, setNoteResponse] = useState([]);
  return (
    <Note
      isEdit={true}
      noteResponse={noteResponse}
      setNoteResponse={setNoteResponse}
    />
  );
};

export default Notes;
