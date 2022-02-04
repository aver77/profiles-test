import React from 'react';
import HeaderNav from './components/HeaderNav';

import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__wrapper _container'>
                <HeaderNav/>
            </div>
        </div>
    );
};

export default Header;