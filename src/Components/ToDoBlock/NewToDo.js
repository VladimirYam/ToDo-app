import "./ToDoBlock.css";
import React, { useState } from "react";

const NewToDo = (props) => {
  const textInput = "What needs to be done?";
  const [inputEvent, setInputEvent] = useState(textInput);

  const eventChangeHandler = (e) => {
    setInputEvent(e.target.value);
  };

  const tapInputHandler = (e) => {
    if (inputEvent === textInput) {
      setInputEvent("");
    }
  };
  const blurInputHandler = (e) => {
    if (inputEvent.trim().length === 0) {
      setInputEvent(textInput);
    }
  };
  const submitInputHandler = (e) => {
    if (e.keyCode === 13 && inputEvent.trim().length !== 0) {
      props.onCreateEvent(inputEvent);
      setInputEvent("");
    }
  };

  return (
    <div className="new-todo">
      <span className="material-symbols-outlined">expand_more</span>
      <input
        type="text"
        value={inputEvent}
        onChange={eventChangeHandler}
        onFocus={tapInputHandler}
        onBlur={blurInputHandler}
        onKeyDown={submitInputHandler}
      />
    </div>
  );
};

export default NewToDo;
