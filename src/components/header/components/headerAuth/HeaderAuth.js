import React, { memo, useCallback, useState } from 'react';
import Login from '../../../../modularComponents/login/Login';

const HeaderAuth = () => {
    const [openLogin, setOpenLogin] = useState(false);

    const openLoginHandler = useCallback((bool) => {
        setOpenLogin(bool);
    }, []);

    const clickHandler = () => setOpenLogin(true);

    return (
        <>
            <span 
                className='header__item-text header__auth'
                onClick={clickHandler}
            >
                Вход
            </span>
            {openLogin && <Login openLoginHandler={openLoginHandler}/>}
        </>
    );
};

export default memo(HeaderAuth);