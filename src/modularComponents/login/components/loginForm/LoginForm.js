import React, { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authorize } from '../../../../redux/authSlice';
import Methods from '../../../../utils/methods';
import LoginClose from '../loginBtns/LoginClose';
import LoginSubmit from '../loginBtns/LoginSubmit';
import LoginSection from '../loginInput/LoginSection';
import LoginTitle from './LoginTitle';

const LoginForm = ({openLoginHandler}) => {
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const dispatch = useDispatch();

    const setLoginHandler = useCallback((value) => {
        setLogin(value)
    }, []);

    const setPasswordHandler = useCallback((value) => {
        setPassword(value)
    }, []);

    const submitHandler = (e) => {
        const method = new Methods();
        if (method.validation(e, login, password, '.login__text-login', '.login__text-password')) {
            dispatch(authorize(login));
            openLoginHandler(false);
        }
    }

    return (
        <form className='login__form' onSubmit={submitHandler}>
            <LoginClose openLoginHandler={openLoginHandler}/>
            <LoginTitle/>
            <LoginSection setLoginHandler={setLoginHandler} setPasswordHandler={setPasswordHandler}/>
            <LoginSubmit/>
        </form>
    );
};

export default memo(LoginForm);