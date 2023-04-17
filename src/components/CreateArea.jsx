import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.addNewCard}>
        <input onChange={props.handleChange} name="title" placeholder="Title" />
        <textarea onChange={props.handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
