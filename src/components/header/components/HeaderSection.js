import React from 'react';
import HeaderAuthItem from './headerAuth/HeaderAuthItem';
import HeaderItem from './HeaderItem';

const HeaderSection = () => {
    return (
        <div className='header__section'>
            <HeaderAuthItem/>
            <HeaderItem link='/news' text='Новости'/>
        </div>
    );
};

export default HeaderSection;