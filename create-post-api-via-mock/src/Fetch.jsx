import  Axios  from "axios";
import { useEffect, useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = "https://68db6a91445fdb39dc2550e9.mockapi.io/Students";
    Axios.get(fetchData).then((res) => {
      setData(res.data);
    });
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className="text-center">All Data Fetch From API</h1>
            <table className="table table-double-bordered">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Age</th>
                  <th scope="col">City</th>
                </tr>
              </thead>
              <tbody>
                {data.map((index) => (
                  <tr key={index.id}>
                    <td>{index.id}</td>
                    <td>{index.name}</td>
                    <td>{index.email}</td>
                    <td>{index.age}</td>
                    <td>{index.city}</td>
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

export default Fetch;