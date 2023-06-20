import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import style from './SortingBlock.module.css'
import { setCurrentPage, setSortValue } from '../../../../store/reducers';

// Мб тут нужен рефакторинг, хз делать ли тут локальный стейт или оставить все в глобальном
const SortingBlock = (props) => {
    const dispatch = useDispatch();
    const sortValue = useSelector(state => state.movie.sortValue)
    const handleChange = (event) => {
        dispatch(setSortValue(event.target.value))
        dispatch(setCurrentPage(1))
    }

    return (
        <div className={style.sortBlock}>
            <span>Сортировать по: </span>
            <select value={sortValue} onChange={(event) => handleChange(event)}>
                {props.selectedSort.map((sort,index) => <option key={index} value={index}>{sort.name}</option>)}
            </select>
        </div>
    );
}

export default SortingBlock;