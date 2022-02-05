import React, { memo } from 'react';
import LoginInputs from './LoginInputs';

const LoginSection = ({setLoginHandler, setPasswordHandler}) => {
    return (
        <div className='login__section'>
            <LoginInputs setInputHandler={setLoginHandler} placeholder='Your login' classes='login' type='text'/>
            <LoginInputs setInputHandler={setPasswordHandler} placeholder='Your password' classes='password' type='password'/>
        </div>
    );
};

export default memo(LoginSection);