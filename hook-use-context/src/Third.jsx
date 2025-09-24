import React, { useContext } from 'react'
import { myNameContext } from './App'

function Third() {
    let name = useContext(myNameContext)
  return (
    <>
    <p>Hi, {myNameContext} from component First</p>
    </>
  )
}

export default Third