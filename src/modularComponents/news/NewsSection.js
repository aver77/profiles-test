import React, { memo, useCallback, useState } from 'react';
import NewsListWrap from './components/newsList/NewsListWrap';
import NewsSearch from './components/newsInputs/NewsSearch';
import NewsInput from './components/newsInputs/NewsInput';

const NewsSection = () => {

    const [searchingValue, setSearchingValue] = useState('');

    const searchHandler = useCallback((value) => {
        setSearchingValue(value)
    }, [])

    return (
        <div className='news__section'>
            <NewsInput/>
            <NewsSearch searchHandler={searchHandler}/>
            <NewsListWrap filtered={searchingValue}/>
        </div>
    );
};

export default memo(NewsSection);