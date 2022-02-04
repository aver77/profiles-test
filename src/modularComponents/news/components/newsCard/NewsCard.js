import React from 'react';
import NewsCardApproveSection from './NewsCardApproveSection';

const NewsCard = ({title, desc, date, isAdmin, id}) => {
    return (
        <>
            <p className='news__title-card'>{title}</p>
            <p className='news__desc-card'>{desc}</p>
            <p className='news__date-card'>{date}</p>
            {isAdmin?<NewsCardApproveSection id={id}/>:null}   
        </>
    );
};

export default NewsCard;