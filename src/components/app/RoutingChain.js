import React from 'react';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import Header from '../header/Header';
import MainPage from '../../pages/mainPage/MainPage';
import NewsPage from '../../pages/newsPage/NewsPage';
import Footer from '../footer/Footer';
import Error from '../error/Error';

const RoutingChain = () => {
    return (
        <Router>
            <Header/>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/news' element={<NewsPage/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
            <Footer/>
        </Router>
    );
};

export default RoutingChain;