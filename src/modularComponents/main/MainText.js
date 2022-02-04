import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import './MainText.scss';

const MainText = () => {
    const auth = useSelector(state => state.authSlice.isAuth);
    const currentUser = useSelector(state => state.authSlice.role);

    return (
        <span className='main__text'>
            {auth?`Привет, ${currentUser}`: 'Привет, гость!'}
        </span>
    );
};

export default memo(MainText);