import React from 'react';
import useStore from '../store/useStore';
import { Link } from 'react-router-dom';

function Form2() {
    const { form, submittedData, updateForm, submitForm } = useStore();

    const handleChange = (e) => {
      const { name, value } = e.target;
      updateForm(name, value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      submitForm();
    };
  
  return (
    <div className='App'>
      <h1>Zustand Form POC</h1>
      <form onSubmit={handleSubmit}>
        <div>
            {submittedData && (
                <div>
                    <h2>Hi {submittedData.name}!</h2>
                </div>
            )}
        </div>
        <div>
            <label>Receiver Information</label>
        </div>
        <div>
          <label>Phone:</label>
          <input
            type='number'
            name='phone'
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='reciver'
            value={form.reciver}
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
