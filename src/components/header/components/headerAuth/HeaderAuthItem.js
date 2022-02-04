import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import HeaderAuth from './HeaderAuth';
import HeaderUnauth from './HeaderUnauth';

const HeaderAuthItem = () => {
    const auth = useSelector(state => state.authSlice.isAuth);
    return (
        <li className='header__item-list'>
            {
                !auth?<HeaderAuth/>:<HeaderUnauth/>
            }
        </li>
    );
};

export default memo(HeaderAuthItem);