import React, { memo } from 'react';
import NewsCard from '../newsCard/NewsCard';

const NewsItems = ({news, isAdmin = null, filtered = null}) => {

const currentNews = () => {
    if (filtered === null) return [...news].reverse();
    else {
        const filteredNews = news.filter(item => item.name.toLowerCase().includes(filtered?.toLowerCase()));
        return [...filteredNews].reverse();
    }
}

return (
        currentNews().map(item => {
            return (
                <div key={item.id} className='news__card'>
                    <NewsCard title={item.name} desc={item.description} date={item.date} isAdmin={isAdmin} id={item.id}/>
                </div>
            )
        })
    )
};

export default memo(NewsItems);