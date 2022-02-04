import React, { memo } from 'react';

const LoginSubmit = () => {
    return (
        <button type='submit' className='login__submit'>Отправить</button>
    );
};

export default memo(LoginSubmit);