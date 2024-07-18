import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateForm, submitForm } from '../store/store';
import { Link } from 'react-router-dom';

function Form2() {
  const form = useSelector(state => state.form);
  const submittedData = useSelector(state => state.form.submittedData);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({name, value}));
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
