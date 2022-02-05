import React, { memo } from 'react';

const LoginInputs = ({setInputHandler, placeholder, classes, type}) => {

    const inputChangeHandler = (e) => {
        setInputHandler(e.target.value)
    }

    return (
        <>
            <input onChange={inputChangeHandler} placeholder={placeholder} className={`login__input-${classes}`} type={type}/>
            <p className={`login__text-${classes}`}></p>
        </>
    );
};

export default memo(LoginInputs);