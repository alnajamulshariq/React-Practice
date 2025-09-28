import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  useEffect(()=>{
    Axios.get(apiUrl).then((res) =>{
      setData(res.data);
    })
  })

  return (
    <>
      <h1 className="text-center">API data Feth through Axios</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    UserId
                  </th>
                  <th scope="col" className="text-center">
                    Id
                  </th>
                  <th scope="col" className="text-center">
                    Title
                  </th>
                  <th scope="col" className="text-center">
                    Body
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
}

export default App;
