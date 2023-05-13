import React, { useState } from "react";
//add the add icon to the text area
import AddIcon from '@mui/icons-material/Add';
//for floating action button
import Fab from '@mui/material/Fab';
//for collaspe and expand of text area
import Zoom from '@mui/material/Zoom';
import axios from "axios";

export default function CreateArea(props) {

  //set a 1 note state 
  const [note, setNote] = useState({
    title: "",
    description: ""
  });

  //use the state for expanding and collapsing of text area
  const [expand, setExpand] = useState(false);

  //when the input value gets change whether the title and content it will fill the empty space

  function handleChange(e) {
    const val = e.target.value;
    const nam = e.target.name;

    setNote({
      ...note,
      [nam]: val
    });

    // name === "title" ? setNote({ title: val }, { content: note.content } ):
    //    name === "content" && setNote({ title: note.title }, { content: val })
  }
  function onSubmit(e){

      axios.post('http://localhost:5000', note)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      props.handleClick(note);
      setNote({ title: "", description: "" });
      setExpand(false);

      e.preventDefault();
      };


  //to expand on onclick
  function exp() {
    setExpand(true);
  }
  //input form sends the data to handle the change and also sets the value
  //button onclick method take the handle click which is in the app.js and send the note to handleclick function
  //and sets the note

  return (

    <div>
      <form className="create-note" >
        {expand && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}


        <textarea onClick={exp} onChange={handleChange} name="description" placeholder="Take a note..."
          rows={expand ? 3 : 1} value={note.description} />

        <Zoom in={expand}><Fab onClick={onSubmit}
        ><AddIcon /></Fab>
        </Zoom>
      </form>

    </div>
  );
}
