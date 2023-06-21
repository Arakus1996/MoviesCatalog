import style from './NavList.module.css'
import { ReactComponent as LogoBurger } from '../../../../icons/burger.svg'
import { useDispatch } from 'react-redux';
import { setActiveCountries, setActiveGenres, setActiveMovieType, setDefaultFilters, setIsTop, setNewMovieDate } from '../../../../store/reducers';


///// Надо в навбаре настроить популярные фильтры по клику 
const NavButtons = (props) => {
///вынести функцию получения даты эта функция вызывается когда надо щапросить фильмы новинки
    const dateRange = () => {
        let toDate = new Date()
        let fromDate = new Date()
        fromDate.setMonth(fromDate.getMonth() - 1)
        toDate = toDate.toLocaleDateString('ru-RU');
        fromDate = fromDate.toLocaleDateString('ru-RU');
        return `${fromDate}-${toDate}`
    }

    const dispatch = useDispatch()
    const handleClick = (data, action) => {
        dispatch(setDefaultFilters())
        dispatch(action(data))
    }
    return (
        <ul className={style.navList}>
            <li><a><LogoBurger className={style.logoBurger} /><span>Категории</span></a></li>
            <li onClick={() => handleClick('Фильмы', setActiveMovieType)}><a>Фильмы</a></li>
            <li onClick={() => handleClick(dateRange(), setNewMovieDate)}><a>Новинки</a></li>
            <li onClick={() => handleClick('Сериалы', setActiveMovieType)}><a>Сериалы</a></li>
            <li onClick={() => handleClick('реальное ТВ', setActiveGenres)}><a>Передачи</a></li>
            <li onClick={() => handleClick('Мультфильмы', setActiveMovieType)}><a>Мультики</a></li>
            <li onClick={() => handleClick('!null', setIsTop)}><a>Топ-500</a></li>
            <li onClick={handleClick}><a>Подборки</a></li>
            <li onClick={handleClick}><a>Скоро в кино</a></li>
            <li onClick={() => handleClick('Аниме', setActiveMovieType)}><a>Аниме</a></li>
            <li onClick={() => handleClick('Россия', setActiveCountries)}><a>Русское</a></li>
            <li onClick={handleClick}><a>Рандом</a></li>
        </ul>
    );
}

export default NavButtons;