import React from 'react'
import { useState } from 'react'

function App() {

  let [stdInfo, setStdInfo] = useState({
    name: "Shariq",
    email: "mschariquen@gmail.com",
    age: 24,
    city: "Karachi"
  });

  let changeInfo = () => {
    setStdInfo({
      name: "Shariq Najam",
      email: "shariq@gmail.com",
      age: 25,
      city: "Lahore"
    })
  }
  return (
    <>
    <p>Name: {stdInfo.name}</p>
    <p>Name: {stdInfo.email}</p>
    <p>Name: {stdInfo.age}</p>
    <p>Name: {stdInfo.city}</p>
    <button onClick={changeInfo}>Change Info</button>
    </>
  )
}

export default App