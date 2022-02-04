import React from 'react';
import NewsCardApproveImg from './NewsCardApproveImg';

import approve from '../../../../assets/images/approve.png';
import disapprove from '../../../../assets/images/disapprove.png';

const NewsCardApproveSection = ({id}) => {
    return (
        <div className='news__section-card'>
            <NewsCardApproveImg id={id} src={approve} alt='approve'/>
            <NewsCardApproveImg id={id} src={disapprove} alt='disapprove'/>
        </div>
    );
};

export default NewsCardApproveSection;