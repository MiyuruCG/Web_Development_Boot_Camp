import React, { useState } from "react";
//import Note from "./Note";

function CreateArea(props) {

  const [note, setDetails] = useState({
    title: "",
    content: ""
  });

  function getValue(event) {
    const { name, value } = event.target;

    setDetails(previousVal => {
      return {
        ...previousVal,
        [name]: value
      }
    });
  }

  function submitNote(event) {
    props.note(note);
    setDetails({
      title: "",
      content: ""
    });
    event.preventDefault();
  }


  return (
    <div>
      <form>
        <input name="title" value={note.title} placeholder="Title" onChange={getValue} />
        <textarea name="content" value={note.content} placeholder="Take a note..." rows="3" onChange={getValue} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
