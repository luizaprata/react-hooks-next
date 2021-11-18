import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [history, setHistory] = useState([]);

  return (
    <>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
          setHistory([...history, e.target.value]);
        }}
        placeholder="Enter some text"
      />
      <br/><span>{inputText}</span>
      <ul>
        {history.map(e => <li>{e}</li>)}
      </ul>
    </>
  );
};

export default InputElement;
