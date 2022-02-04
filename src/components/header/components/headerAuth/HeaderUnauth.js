import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { unauthorize } from '../../../../redux/authSlice';

const HeaderUnauth = () => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(unauthorize());
    }

    return (
        <span 
            className='header__item-text header__unauth'
            onClick={clickHandler}
        >
            Выход
        </span>
    );
};

export default memo(HeaderUnauth);