import React, { createContext } from 'react'
import './App.css'
import First from './First'

export let myNameContext = createContext()

function App() {
  return (
    <>
    <myNameContext.Provider value={"Shariq Najam"}>
    <First />
    </myNameContext.Provider>
    </>
  )
}

export default App