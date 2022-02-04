import React, { memo } from 'react';
import HeaderSection from './HeaderSection';
import HeaderImg from './HeaderImg';

const HeaderNav = () => {
    return (
        <nav className='header__nav'>
            <ul className='header__list'>
                <HeaderImg/>
                <HeaderSection/>
            </ul>
        </nav>
    );
};

export default memo(HeaderNav);