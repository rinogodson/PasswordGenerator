import React from "react";
import { useState } from "react";

import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [capitals, setCapitals] = useState(true);
  const [smallLetters, setSmallLetters] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [specialChars, setSpecialChars] = useState(true);
  const [numOfChars, setNumOfChars] = useState(10);

  function genpass(charCount, cap, small, num, special) {
    let pass = "";
    let charSet = "";
    if (cap) {
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (small) {
      charSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (num) {
      charSet += "0123456789";
    }
    if (special) {
      charSet += "!@#$%^&*()_+";
    }
    for (let i = 0; i < charCount; i++) {
      pass += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    setPassword(pass);
  }
  return (
    <>
      <div className="container">
        <div className="inputArea">
          <input value={password} type="text" className="passOutput" />
          <div className="checkboxes">
            <label>
              <input
                defaultChecked
                type="checkbox"
                className="capitalLetters"
                onChange={(e) => {
                  setCapitals(e.target.checked);
                }}
              />
              Capital Letters
            </label>
            <label>
              <input
                defaultChecked
                type="checkbox"
                className="smallLetters"
                onChange={(e) => {
                  setSmallLetters(e.target.checked);
                }}
              />
              Small Letters
            </label>
            <label>
              <input
                defaultChecked
                type="checkbox"
                className="numbers"
                onChange={(e) => setNumbers(e.target.checked)}
              />
              Numbers
            </label>
            <label>
              <input
                defaultChecked
                type="checkbox"
                className="specialChars"
                onChange={(e) => setSpecialChars(e.target.checked)}
              />
              Special Characters
            </label>
          </div>
          <button
              className="genPass"
              onClick={() =>
                genpass(
                  numOfChars,
                  capitals,
                  smallLetters,
                  numbers,
                  specialChars
                )
              }
            >
              <input
              value={numOfChars}
              type="number"
              className="numOfCharsInput"
              onChange={(e) => {
                setNumOfChars(e.target.value);
              }}
            />
              {" "}
              Generate Password{" "}
            </button>
        </div>
      </div>
    </>
  );
}

export default App;
