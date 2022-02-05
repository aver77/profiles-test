import React from 'react';
import { useDispatch } from 'react-redux';
import { approveNewByAdmin, disapproveNewByAdmin } from '../../../../redux/newsSlice';

const NewsCardApproveImg = ({src, alt, id}) => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        if (alt === 'approve') {
            dispatch(approveNewByAdmin(id));
        }
        if (alt === 'disapprove') {
            dispatch(disapproveNewByAdmin(id));
        }
    }

    return (
        <img className='news__img-card' onClick={clickHandler} src={src} alt={alt}/>
    );
};

export default NewsCardApproveImg;