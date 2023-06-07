
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const Home = () => {
     const [data, setData] = useState([]);
     const nav = useNavigate();
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
      <div>
        <Link to='/create'>Create</Link>
      </div>
      <table className='table'>
        <thead>
            <tr>
                <th>id</th>
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
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td>{item.email}</td>
                    <td>{item.bio}</td>
                    <td>{item.role}</td>
                    <td>
                      <Link to={`/update/${item.id}`}>Update</Link>
                      <button onClick={e => handleDelete(item.id)}>Delete</button>
                      <Link to={`/info/${item.id}`}>Info</Link>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>

    
  )
}

export default Home
