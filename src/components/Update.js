import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import Link from 'react-router-dom';


const Update = () => {
    const {id} = useParams();

    const [inputData, setInputData] = useState({
        id: id,
        name: '',
        surname: '',
        email: '',
        bio: ' ',
        role: ''
    })

    const nav = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
         axios.put(`http://localhost:3003/employee/`+id, inputData)
        .then(res => {
            alert('succes')
            nav('/')
        })

        
    }

    useEffect(() => {
        axios.get(`http://localhost:3003/employee/` + id)
        .then(res=> setInputData(res.data))
        .catch(err => console.log(err))
    }, [])


  return (
    <div>
    <div>
      <form className="container" onSubmit={handleSubmit}>

      <div className="form-group">
          <label htmlFor='id'>ID</label>
          <input type='number' disabled name='id' className='form-control' value={inputData.id}
          />
          </div>

          <div className="form-group">
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' className='form-control' value={inputData.name}
          onChange={e=> setInputData({...inputData, name: e.target.value})}/>
          </div>

          <div className="form-group">
          <label htmlFor='surname'>Surname</label>
          <input type='text' name='name' className='form-control' value={inputData.surname}
          onChange={e=> setInputData({...inputData, surname: e.target.value})}/>
          </div>

          <div className="form-group">
          <label htmlFor='email'>email</label>
          <input type='email' name='name' className='form-control' value={inputData.email}
          onChange={e=> setInputData({...inputData, email: e.target.value})}/>
          </div>

          <div className="form-group">
          <label htmlFor='bio'>bio</label>
          <input type='text' name='name' className='form-control' value={inputData.bio}
          onChange={e=> setInputData({...inputData, bio: e.target.value})}/>
          </div>

          <div className="form-group">
          <label htmlFor='role'>role</label>
          <input type='text' name='name' className='form-control' value={inputData.role}
          onChange={e=> setInputData({...inputData, role: e.target.value})}/>
          </div>
          <button class="btn btn-success">Update</button>
      </form>
    </div>
  </div>
  )
}

export default Update
