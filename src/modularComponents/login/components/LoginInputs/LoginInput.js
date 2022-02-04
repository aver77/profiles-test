import React, { memo } from 'react';

const LoginInput = ({setLoginHandler}) => {

    const loginChangeHandler = (e) => {
        setLoginHandler(e.target.value)
    }

    return (
        <>
            <input onChange={loginChangeHandler} placeholder='Your login' className='login__input-login' type="text"/>
            <p className='login__text-login'></p>
        </>
    );
};

export default memo(LoginInput);