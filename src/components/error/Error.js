import React from 'react';
import errorPic from '../../assets/images/errorPic.png';

import './Error.scss';

const Error = () => {
    return (
        <div className='error'>
            <img className='error__img' src={errorPic} alt="error"/>
            <p className='error__text'>Ошибка загрузки</p>
        </div>
    );
};

export default Error;