import React, { memo } from 'react';

import HeaderImg from './HeaderImg';
import HeaderSection from './HeaderSection';

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