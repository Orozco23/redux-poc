import React from "react";
import { useSelector } from 'react-redux';

function Form3() {

    const submittedData = useSelector(state => state.form.submittedData);

    return(
        <div className='App'>
            <h1>Session Storage Form POC</h1>
            <div className='panel'>
                { submittedData && (
                    <div>
                        <h1>Hi {submittedData.name}!</h1>
                        <h2>The message: "{submittedData.message}" was sent to {submittedData.reciver} on the phone {submittedData.phone} using Redux Toolkit</h2>
                        <h3>The confirmation will be sent to the email {submittedData.email}</h3>
                    </div>
                )} 
            </div>
        </div>
    )
}

export default Form3;
