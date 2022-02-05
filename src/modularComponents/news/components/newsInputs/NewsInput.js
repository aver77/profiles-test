import React, { memo, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNewByUser } from '../../../../redux/newsSlice';

const NewsInput = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const keyPressHandler = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            inputHandler();
        }
    }
    const inputRefHandler = () => {
        let result;
        !inputRef? result = '' : result = inputRef.current.value;
        return result;
    }
    const inputHandler = () => {
        const data = inputRefHandler();
        if (data.trim()) {
            const currentDate = new Date();
            const newForAdd = {
                id: uuidv4(),
                name: data.length>10? data.slice(0,10) + '...' : data,
                description: data,
                date: `${currentDate.getDay()}.${currentDate.getMonth()}.${currentDate.getFullYear()}`
            }
            dispatch(addNewByUser(newForAdd));
        }
        inputRef.current.value = '';
    };

    return (
        <div className='news__set-section'>
            <label className='news__set-title' htmlFor="newsInput">Введите новость:</label>
            <div className='news__set-elems'>
                <input onKeyDown={keyPressHandler} ref={inputRef} className='news__set-input' type='text' placeholder='Новая новость' id='newsInput'/>
                <button onClick={inputHandler} className='news__set-btn'>Add</button>
            </div>
        </div>
    );
};
export default memo(NewsInput);