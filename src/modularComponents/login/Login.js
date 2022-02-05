/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef } from 'react';
import LoginForm from './components/loginForm/LoginForm';
import Methods from '../../utils/methods';

import './Login.scss';

const Login = ({openLoginHandler}) => {
    const loginRef = useRef(null);

    const clickHandler = useCallback(() => openLoginHandler(false), []);

    useEffect(() => {
        const Method = new Methods();
        Method.clickOutside(loginRef, clickHandler);
    }, [loginRef])

    return (
        <div ref={loginRef} className='login'>
            <LoginForm openLoginHandler={openLoginHandler}/>
        </div>
    );
};

export default Login;