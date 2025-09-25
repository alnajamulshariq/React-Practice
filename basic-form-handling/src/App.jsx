import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [data, setData] = useState(
    {
      name: '',
      email: '',
      age: ''
    }
  );

  const getValues = (e) => {
    e.preventDefault();
    setData(
      {
        name: e.target[0].value,
        email: e.target[1].value,
        age: e.target[2].value
      }
    );
    
  }
  return (
    <>
    <div className="container w-100">
      <h1 className='text-center'>React Form</h1>
      <form onSubmit={getValues}>
        <input type="text" placeholder='Enter Your Name' className='form-control' /><br />
        <input type="email" placeholder='Enter Your Email' className='form-control' /><br />
        <input type="number" placeholder='Enter Your Age' className='form-control' /><br />
        <input type="submit" placeholder='Enter Your Name' className='btn btn-success w-100' /><br />
      </form>
    </div>
    <div className="container w-100 mt-5">
      <h2 className='text-center'>Fetch Form Data</h2>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.age}</p>
    </div>
    </>
  )
}

export default App