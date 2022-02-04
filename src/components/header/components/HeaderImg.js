import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/headIcon.svg';

const HeaderImg = () => {
    return (
        <li className='header__logo-list'>
            <Link to='/'><img className='header__img' src={logo} alt="logo" /></Link>
        </li>
    );
};

export default memo(HeaderImg);