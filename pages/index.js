import React, { useEffect, useReducer, useState } from "react";

import EmailValitatingForm from '../src/EmailValitatingForm'
import speakerReducer from "../src/speakerReducer";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [history, setHistory] = useState([]);

  const [{ isLoading, speakerList }, dispatch] = useReducer(speakerReducer, { isLoading: true, speakerList: [] })

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => resolve(), 1000)
    }).then(() => dispatch({ type: 'setSpeakerList', data: [{ name: "luiza" }, { name: "antonio" }] }))
  }, [])

  if (isLoading) return <p>loading</p>

  return (
    <>
      <div>
        {speakerList.map((item,idx) => <p key={idx}>{item.name}</p>)}
      </div>
      
      <input
        onChange={(e) => {
          setInputText(e.target.value);
          setHistory([...history, e.target.value]);
        }}
        placeholder="Enter some text"
      />
      <br /><span>{inputText}</span>
      <ul>
        {history.map(e => <li>{e}</li>)}
      </ul>
      <EmailValitatingForm />
    </>
  );
};

export default InputElement;
