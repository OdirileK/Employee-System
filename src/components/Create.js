import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [inputData, setInputData] = useState({
        image: '',
        name: '',
        surname: '',
        email: '',
        bio: ' ',
        role: ''
    })

    const nav = useNavigate();

    const handleSubmit = (event) => {

        event.preventDefault();
        axios.post('http://localhost:3003/employee/', inputData)
        .then(res => {
            alert('succes')
            nav('/')
        })
    }

    
  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
            
            <div className="form-group">
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' className='form-control'
            onChange={e=> setInputData({...inputData, name: e.target.value})}/>
            </div>

            <div className="form-group">
            <label htmlFor='surname'>Surname</label>
            <input type='text' name='name' className='form-control'
            onChange={e=> setInputData({...inputData, surname: e.target.value})}/>
            </div>

            <div className="form-group">
            <label htmlFor='email'>email</label>
            <input type='email' name='name' className='form-control'
            onChange={e=> setInputData({...inputData, email: e.target.value})}/>
            </div>

            <div className="form-group">
            <label htmlFor='bio'>bio</label>
            <input type='text' name='name' className='form-control'
            onChange={e=> setInputData({...inputData, bio: e.target.value})}/>
            </div>

            <div className="form-group">
            <label htmlFor='role'>role</label>
            <input type='text' name='name' className='form-control'
            onChange={e=> setInputData({...inputData, role: e.target.value})}/>
            </div>

            <div>
            <label class="form-label" >Select Image</label>
                <input type="file" name="file" id="blah"
                     onChange={(event) => {
                        const [file] = document.getElementById('blah').files
                        if (file) {
                        setInputData({...inputData, image : file.name});
                        }
                    }}
                />
                
            </div>

            <button class="btn btn-success" >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create
