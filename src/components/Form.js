import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateForm, submitForm } from '../store/store';
import { Link } from 'react-router-dom';

function Form() {
  const form = useSelector(state => state.form.form);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm());
  };

  return (
    <div className='App'>
      <h1>Redux Toolkit Form POC</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button>        
        <Link to='/form2'>Next</Link>      
      </button>
    </div>
  );
};

export default Form;
