import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Form2() {
  
  const [state, setState] = useState({
    name: JSON.parse(window.sessionStorage.getItem('form')).name,
    email: JSON.parse(window.sessionStorage.getItem('form')).email,
    message: JSON.parse(window.sessionStorage.getItem('form')).message,
    phone: '',
    reciver: ''
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
          <h2>Hi {state.name}!</h2>
        </div>
        <div>
            <label>Receiver Information</label>
        </div>
        <div>
          <label>Phone:</label>
          <input
            type='number'
            name='phone'
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='reciver'
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
      <button>        
        <Link to='/form3'>Next</Link>      
      </button>
    </div>
  );
};

export default Form2;
