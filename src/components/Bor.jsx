import React from 'react';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';

function Bor() {
  const [text, setText] = useState('Enter The Text');
  const [mail, setMail] = useState(' ');

  function handleupper() {
    setText(text.toUpperCase());
  }
  function handlelower() {
    setText(text.toLowerCase());
  }

  function handleonChange() {
    setText(event.target.value);
  }

  function extractEmails() {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = text.match(emailRegex) || [];
    setMail(emails);
    // return emails;
  }
  function extractEmail() {
    extractEmails();
    
  }

  function cleartext() {
    setText('');
    setMail(' ')
  }

  function copyText() {
    document.querySelector('textarea').select();
    document.execCommand('copy');
  }
  return (
    <>
      <div className="main">
        <h1>Enter The Text to Analyise</h1>

        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          col="300"
          rows="8"
          className="block p-2.5 w-full  border-slate-500 outline rounded-lg border "
          value={text}
          onChange={handleonChange}
        ></textarea>
        <button
          onClick={handleupper}
          className="bg-blue-500 my-5 rounded-lg w-70 h-10 p-2 text-white"
        >
          Conver to UpperCase
        </button>
        <button
          onClick={handlelower}
          className="bg-blue-500 my-5 rounded-lg w-70 h-10 p-2 text-white mx-2"
        >
          Conver to LowerCase
        </button>
        <button
          onClick={handlelower}
          className="bg-blue-500 my-5 rounded-lg w-70 h-10 p-2 text-white mx-2"
          onClick={extractEmail}
        >
          Email Extractor
        </button>
        <button
          onClick={handlelower}
          className="bg-blue-500 my-5 rounded-lg w-70 h-10 p-2 text-white mx-2"
          onClick={cleartext}
        >
          Clear Text
        </button>
        <button
          onClick={handlelower}
          className="bg-blue-500 my-5 rounded-lg w-70 h-10 p-2 text-white mx-2"
          onClick={copyText}
        >
          Copy Text
        </button>

        <div className="c">
          {text.split(' ').length} Word and {text.length} Characters,
        </div>
        <div className="r">
          Reading Time is : {0.08 * text.split(' ').length}
          <div>Preview : {text}</div>
          Email is: {mail}
        </div>
      </div>
    </>
  );
}
export default Bor;