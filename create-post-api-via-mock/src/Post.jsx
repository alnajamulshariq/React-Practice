import  Axios  from 'axios';
import React from 'react'

function Post() {
    const submitData = (e) =>{
        e.preventDefault();
        const postUrl = 'https://68db6a91445fdb39dc2550e9.mockapi.io/Students';
        Axios.post(postUrl, new URLSearchParams(
            {
                name: e.target[0].value,
                email: e.target[1].value,
                age: e.target[2].value,
                city: e.target[3].value,
            }
        ));
    
        e.target[0].value ="",
        e.target[1].value ="",
        e.target[2].value ="",
        e.target[3].value ="",

        alert('Form Submitted Successfully')
    }
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <h1 className='text-center'>Enter Your Info</h1>
                <form onSubmit={submitData}>
                    <input className='form-control' type="text" placeholder='Enter Your Name'/><br />
                    <input className='form-control' type="email" placeholder='Enter Your Email'/><br />
                    <input className='form-control' type="number" placeholder='Enter Your Age'/><br />
                    <input className='form-control' type="text" placeholder='Enter Your City'/><br />
                    <input className='btn btn-success w-100' type="submit"/><br />
                </form>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
  )
}

export default Post