import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import LogData from '../../../../utils/logData';
import NewsItems from './NewsItems';

const NewsList = ({filtered}) => {
    const LG = new LogData();
    const approvedNews = useSelector(state => state.newsSlice.approvedNews);
    const newsForApprove = useSelector(state => state.newsSlice.newsForApprove);
    const currentUser = useSelector(state => state.authSlice.role);

    if (currentUser === LG.adminLogin()) {
        return <NewsItems isAdmin={true} news={newsForApprove}/>
    }
    if (currentUser === LG.userLogin()) {
        return <NewsItems filtered={filtered} news={approvedNews}/>
    }
    return <NewsItems news={approvedNews}/>
};

export default memo(NewsList);