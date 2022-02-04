import React from 'react';
import close from '../../../../assets/images/close.png';

const LoginClose = ({openLoginHandler}) => {

    const clickHandler = () => {
        openLoginHandler(false);
    }

    return (
        <div className='login__close'>
            <img 
                className='login__img-close' 
                src={close} alt="close" 
                onClick={clickHandler}
            />
        </div>
    );
};

export default LoginClose;