import React from 'react'
import { useState , useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Link from 'react';


const Info = () => {

    const [Data, setData] = useState([])
    const nav = useNavigate();

    useEffect((id) => {
        axios.get(`http://localhost:3003/employee/`+ id)
        .then(res=> setData(res.data))
        .catch(err => console.log(err))
    }, [])

    
  return (
    <div className='container'>
      
        <div>
        <p>{Data.id}</p>
        <p>{Data.name}</p>
        <p>{Data.surname}</p>
        <p>{Data.email}</p>
        <p>{Data.bio}</p>
        <p>{Data.role}</p>
        {/* <Link to="/">Back</Link> */}
        </div>
  
    </div>
  )
}

export default Info
