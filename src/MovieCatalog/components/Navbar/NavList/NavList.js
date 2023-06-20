import style from './NavList.module.css'
import {ReactComponent as LogoBurger} from '../../../../icons/burger.svg'
import { useDispatch } from 'react-redux';
import { setActiveMovieType } from '../../../../store/reducers';


///// Надо в навбаре настроить популярные фильтры по клику 
const NavButtons = (props) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setActiveMovieType('Фильмы'))
    }
    return (
        <ul className={style.navList}>
            <li><a><LogoBurger className={style.logoBurger}/><span>Категории</span></a></li>
            <li onClick={handleClick}><a>Фильмы</a></li>
            <li><a>Новинки</a></li>
            <li><a>Сериалы</a></li>
            <li><a>Передачи</a></li>
            <li><a>Мультики</a></li>
            <li><a>Топ-250</a></li>
            <li><a>Подборки</a></li>
            <li><a>Скоро в кино</a></li>
            <li><a>Аниме</a></li>
            <li><a>Русское</a></li>
            <li><a>Рандом</a></li>
        </ul>
    );
}

export default NavButtons;