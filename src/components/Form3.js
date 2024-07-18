import React from "react";

function Form3() {

    const form = JSON.parse(window.sessionStorage.getItem('form'))

    return(
        <div className='App'>
            <h1>Session Storage Form POC</h1>
            <div className='panel'>
                { form && (
                    <div>
                        <h1>Hi {form.name}!</h1>
                        <h2>The message: "{form.message}" was sent to {form.reciver} on the phone {form.phone} using Session Storage</h2>
                        <h3>The confirmation will be sent to the email {form.email}</h3>
                    </div>
                )} 
            </div>
        </div>
    )
}

export default Form3;
