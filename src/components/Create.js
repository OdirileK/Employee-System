import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [inputData, setInputData] = useState({
        name: '',
        surname: '',
        email: '',
        bio: ' ',
        role: ''
    })
    const nav = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3003/employee', inputData)
        .then(res => {
            alert('succes')
            nav('/')
        })
    }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' className='form-control'
            onChange={e=> setInputData({...inputData, name: e.target.value})}/>
            </div>
            <div>
            <label htmlFor='surname'>Surname</label>
            <input type='text' name='name' className='form-control'
            onChange={e=> setInputData({...inputData, surname: e.target.value})}/>
            </div>
            <div>
            <label htmlFor='email'>email</label>
            <input type='email' name='name' className='form-control'
            onChange={e=> setInputData({...inputData, email: e.target.value})}/>
            </div>
            <div>
            <label htmlFor='bio'>bio</label>
            <input type='text' name='name' className='form-control'
            onChange={e=> setInputData({...inputData, bio: e.target.value})}/>
            </div>
            <div>
            <label htmlFor='role'>role</label>
            <input type='text' name='name' className='form-control'
            onChange={e=> setInputData({...inputData, role: e.target.value})}/>
            </div>
            <button>submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create
