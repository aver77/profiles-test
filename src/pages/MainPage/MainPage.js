import React from 'react';
import MainText from '../../modularComponents/main/MainText';

import './MainPage.scss';

const MainPage = () => {

    return (
        <div className='main'>
            <div className='main__wrapper _container'>
                <MainText/>
            </div>
        </div>
    );
};

export default MainPage;