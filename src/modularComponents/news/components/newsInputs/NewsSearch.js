import React, { memo } from 'react';

const NewsSearch = ({searchHandler}) => {

    const changeHandler = (e) => {
        searchHandler(e.target.value)
    }

    return (
        <div className='news__search-section'>
            <label className='news__search-title' htmlFor="newsSearch">Введите новость для поиска:</label>
            <div className='news__search-elems'>
                <input onChange={changeHandler} className='news__search-input' type='text' placeholder='Новость для поиска' id='newsSearch'/>
            </div>
        </div>
    );
};

export default memo(NewsSearch);