import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {

  const [state, setState] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target;
   setState({
      ...state,
      [name]: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.sessionStorage.setItem('form', JSON.stringify(state))
  };

  return (
    <div className='App'>
      <h1>Session Storage Form POC</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name='message'
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
      <button>        
        <Link to='/form2'>Next</Link>      
      </button>
    </div>
  );
};

export default Form;
