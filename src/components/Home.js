import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const Home = ({selectedImage}) => {
     const [data, setData] = useState([]);
     
    useEffect(() => {
        axios.get('http://localhost:3003/employee')
        .then(res => setData(res.data) )
        .catch(err => console.log(err))
    }, [])

    function handleDelete(id) {
      const confirm = window.confirm("Sure?")
      if (confirm) {
        axios.delete(`http://localhost:3003/employee/${id}`)
      .then(res => {
        alert('deleted')
        window.location.reload()
      })
      }
      
    }

  return (
    <div className='container mt-5'>
      <div className="addBtn">
      <Link to='/create'>Create</Link>
      {/* <Link to="employee/create" className="btn btn-success"><i class="bi bi-person-plus">Create</i></Link> */}
      </div >
      <table className="table table-responsive table-bordered table-striped">
        <thead className="table table-dark text-white">
            <tr>
                <th>id</th>
                <th>
                  
                </th>
                <th>name</th>
                <th>surname</th>
                <th>email</th>
                <th>bio</th>
                <th>role</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, id) => (
                <tr key={id}>
                    <td>{item.id}</td>
                    <td>
                    <div className="d-flex align-items-center ">
                    {selectedImage && (
        <img className="rounded-circle"
        src={selectedImage} alt="Selected"
        width="50" 
        height="50" 
       />
      )}
                                        {}
                                        </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td>{item.email}</td>
                    <td>{item.bio}</td>
                    <td>{item.role}</td>
                    <td>
                      <Link to={`/update/${item.id}`} class="btn btn-success">Update</Link>
                      <button onClick={e => handleDelete(item.id)} class="btn btn-danger">Delete</button>
                      <Link to={`/info/${item.id}` } class="btn btn-info">Info</Link>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>

    
  )
}

export default Home
