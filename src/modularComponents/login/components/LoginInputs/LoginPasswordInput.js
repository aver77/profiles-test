import React, { memo } from 'react';

const LoginPasswordInput = ({setPasswordHandler}) => {

    const passwordChangeHandler = (e) => {
        setPasswordHandler(e.target.value);
    }

    return (
        <>
            <input onChange={passwordChangeHandler} placeholder='Your password' className='login__input-password' type="password" />
            <p className='login__text-password'></p>
        </>
    );
};

export default memo(LoginPasswordInput);