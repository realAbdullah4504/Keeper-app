import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props) {
  //props.delete call the delItem functtion and give the idof the props back to the app.jsx
  // which then can delete the note
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() =>
        props.delete(props.id)
      }
      ><DeleteIcon /></button>
    </div>
  );
}
