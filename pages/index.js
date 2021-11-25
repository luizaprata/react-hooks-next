import React, { useState } from "react";

import EmailValitatingForm from '../src/EmailValitatingForm'

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
      <EmailValitatingForm />
    </>
  );
};

export default InputElement;
