import React, { useState } from "react";

function TextArea(props) {
  const changeToUp = () => setText(text.toUpperCase());

  const lowerCase = () => setText(text.toLowerCase());

  const onChange = (e) => setText(e.target.value);

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h4>{props.heading}</h4>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
            value={text}
            onChange={onChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>
        <button onClick={changeToUp} className="btn btn-primary mx-1">
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={lowerCase}>
          Convert To Lowercase
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h4>
          <span>Your text summary is:</span>{" "}
        </h4>
        <span>
          Total words: <b>{text.split(" ").length}</b> and Total characters:
          <b> {text.length} </b>
        </span>
        <br />
        <span>
          You can read in: <b>{0.008 * text.split(" ").length}</b> minutes
        </span>
      </div>
    </>
  );
}

export default TextArea;
