import { useDispatch, useSelector } from 'react-redux';
import style from './SortingBlock.module.css'
import { setCurrentPage, setSortValue } from '../../../../store/reducers';

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