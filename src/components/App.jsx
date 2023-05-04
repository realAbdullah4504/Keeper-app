import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //state for the notes array
  const [notes, setNotes] = useState([]);

  //handClick which takes the butoon clicked from Create area component and 
  //send one note to the array and populate it
  function handleClick(note) {
    setNotes([...notes, note]);
    console.log(notes);
  }
  //take an id for the note and delete the specifivc note
  function delItem(id) {
    setNotes(notes.filter((note, index) => {
      return index !== id;
    }));
  }

  // map iterate over the notes array
  return (
    <div>

      <Header />
      <CreateArea handleClick={handleClick} />

      {notes.map((note, index) =>
        <Note key={index} id={index} title={note.title} content={note.content} delete={delItem} />
      )}

    </div>
  );
}

export default App;
