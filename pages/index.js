import React, { useState } from "react";

import EmailValitatingForm from '../src/EmailValitatingForm'
import useSpeakerDataManager from "../src/useSpeakerDataManager";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [history, setHistory] = useState([]);

  const { isLoading, speakerList, favoriteHandler } = useSpeakerDataManager()

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
