import React from 'react';
import LogData from '../../utils/logData';
import { useSelector } from 'react-redux';

import NewsListWrap from '../../modularComponents/news/components/newsList/NewsListWrap';
import NewsSection from '../../modularComponents/news/NewsSection';

import './NewsPage.scss';

const NewsPage = () => {
    const auth = useSelector(state => state.authSlice.isAuth);
    const currentUser = useSelector(state => state.authSlice.role);
    const LD = new LogData();
    return (
        <div className='news'>
            <div className='news__wrapper _container'>
                {auth && currentUser === LD.userLogin() && <NewsSection/>}
                {auth && currentUser === LD.adminLogin() && <NewsListWrap/>}
                {!auth && <NewsListWrap/>}
            </div>
        </div>
    );
};

export default NewsPage;