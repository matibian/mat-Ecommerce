import React, { useState, useEffect } from 'react';

export default function Test() {
  function handleClick(e) {
    console.log(e)

  }

  function handleKeyDown(e) {
    if (e.key === "a") {e.preventDefault()};


  }
  const [email, setEmail] = useState('');
  const [test, setTest] = useState('');
  console.log(email);

  return (
    <div onClick={handleClick} style={{ backgroundColor: 'white' }}>Test

      {/* <input onKeyDown={handleKeyDown} type={"text"} /> */}
      <input type={'email'} value={email} onKeyDown={handleKeyDown} onChange={(e) => setEmail(e.target.value)} placeholder={'ingrese su email'} />
      <br />
      {test}
      <br />

      <button>Enviar</button>

    </div>

  )
}