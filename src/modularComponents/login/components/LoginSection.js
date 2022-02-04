import React, { memo } from 'react';
import LoginInput from './LoginInputs/LoginInput';
import PasswordInput from './LoginInputs/LoginPasswordInput';

const LoginSection = ({setLoginHandler, setPasswordHandler}) => {
    return (
        <div className='login__section'>
            <LoginInput setLoginHandler={setLoginHandler}/>
            <PasswordInput setPasswordHandler={setPasswordHandler}/>
        </div>
    );
};

export default memo(LoginSection);