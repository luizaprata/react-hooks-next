import React, { useCallback, useEffect, useReducer, useState } from "react";

import EmailValitatingForm from '../src/EmailValitatingForm'
import speakerReducer from "../src/speakerReducer";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [history, setHistory] = useState([]);

  const [{ isLoading, speakerList }, dispatch] = useReducer(speakerReducer, { isLoading: true, speakerList: [] })

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => resolve(), 1000)
    }).then(() => dispatch({ type: 'setSpeakerList', data: [{ id:1, name: "luiza" }, { id:123, name: "antonio" }] }))
  }, [])

  const favoriteHandler = useCallback((e) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes['data-id'].value)

    dispatch({
      type: 'toggle-favorite',
      id: sessionId
    })
  })

  if (isLoading) return <p>loading</p>

  return (
    <>
      <div>
        {speakerList.map((speaker, idx) => {
          return (
            <div>
              <p key={idx}>{speaker.name}</p>
              <button data-id={speaker.id} onClick={favoriteHandler}>{speaker.favorite ? 'favorite' : 'unfavorite'}</button>
            </div>
          )
        })}
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
