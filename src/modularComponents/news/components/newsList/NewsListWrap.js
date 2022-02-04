import React, { memo } from 'react';
import NewsList from './NewsList';

const NewsListWrap = ({filtered}) => {
    return (
        <div className='news__list'>
            <NewsList filtered={filtered}/>
        </div>
    );
};

export default memo(NewsListWrap);