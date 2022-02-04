import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const HeaderItem = ({link, text}) => {
    return (
        <li className='header__item-list'>
            <Link to={link}>
                <span className='header__item-text'>{text}</span>
            </Link>
        </li>
    );
};

export default memo(HeaderItem);