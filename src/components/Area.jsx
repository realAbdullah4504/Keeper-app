import React, { useEffect, useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

const url = process.env.REACT_APP_BASE_URL;
export default function Area() {
  //state for the notes array
  const [notes, setNotes] = useState([
    {
      title: "",
      description: "",
    },
  ]);

  useEffect(() => {
    axios
      .get(`${url}/notes`)
      .then((response) => {
        console.log(response.data);
        setNotes(response.data);
        //console.log(exercises);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //handClick which takes the butoon clicked from Create area component and
  //send one note to the array and populate it
  function handleClick(note) {
    setNotes([...notes, note]);
    console.log(notes);
  }
  //take an id for the note and delete the specifivc note
  function delItem(id) {
    console.log(id);
    axios.delete(`${url}/notes/` + id).then((response) => {
      console.log(response.data);
    });
    setNotes(
      notes.filter((note) => {
        return note._id !== id;
      })
    );
  }
  return (
    <div>
      <CreateArea handleClick={handleClick} />

      {notes.map((note, index) => (
        <Note
          key={index}
          id={note._id}
          title={note.title}
          content={note.description}
          delete={delItem}
        />
      ))}
    </div>
  );
}
