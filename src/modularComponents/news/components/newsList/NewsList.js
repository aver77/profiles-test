import React, { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import LogData from '../../../../utils/logData';
import NewsItems from './NewsItems';

const NewsList = ({filtered}) => {
    const LG = new LogData();

    const approvedNews = useSelector(state => state.newsSlice.approvedNews);
    const approvedNewsMemoized = useMemo(() => approvedNews, [approvedNews]);

    const newsForApprove = useSelector(state => state.newsSlice.newsForApprove);
    const newsForApproveMemoized = useMemo(() => newsForApprove, [newsForApprove])

    const currentUser = useSelector(state => state.authSlice.role);

    if (currentUser === LG.adminLogin()) {
        return <NewsItems isAdmin={true} news={newsForApproveMemoized}/>
    }
    if (currentUser === LG.userLogin()) {
        return <NewsItems filtered={filtered} news={approvedNewsMemoized}/>
    }
    return <NewsItems news={approvedNewsMemoized}/>
};

export default memo(NewsList);