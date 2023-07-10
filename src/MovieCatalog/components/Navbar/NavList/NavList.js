import style from './NavList.module.css'
import { ReactComponent as LogoBurger } from '../../../../icons/burger.svg'
import { useDispatch } from 'react-redux';
import { setActiveCountries, setActiveGenres, setActiveMovieType, setDefaultFilters, setIsTop, setNewMovieDate } from '../../../../store/reducers';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import dateRange from '../../../utils/parseFunc/dateRange';

const NavList = (props) => {

    const dispatch = useDispatch()
    const handleClick = (data, action) => {
        dispatch(setDefaultFilters())
        dispatch(action(data))
    }
    const handleDefault = () => {
        dispatch(setDefaultFilters())
    }
    const [isActiveBurger, setIsActiveBurger] = useState(false)
    const handleMouseOver = () => {
        setIsActiveBurger(true)
    }
    const handleMouseOut = () => {
        setIsActiveBurger(false)
    }
    return (
        <Link to="/">
            <ul className={style.navList}>
                <div >
                    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={style.burger}><LogoBurger className={style.logoBurger} /></div>
                    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={style.category + (isActiveBurger ? style.active : '')}>
                        <div className={style.wrappCategory}>
                            <li onClick={handleDefault}><span>Главная</span></li>
                            <li onClick={() => handleClick('Фильмы', setActiveMovieType)}><span>Фильмы</span></li>
                            <li onClick={() => handleClick(dateRange(), setNewMovieDate)}><span>Новинки</span></li>
                            <li onClick={() => handleClick('Сериалы', setActiveMovieType)}><span>Сериалы</span></li>
                            <li onClick={() => handleClick('реальное ТВ', setActiveGenres)}><span>Передачи</span></li>
                            <li onClick={() => handleClick('Мультфильмы', setActiveMovieType)}><span>Мультики</span></li>
                            <li onClick={() => handleClick('!null', setIsTop)}><span>Топ-500</span></li>
                            <li onClick={handleClick}><span>Подборки</span></li>
                            <li onClick={handleClick}><span>Скоро в кино</span></li>
                            <li onClick={() => handleClick('Аниме', setActiveMovieType)}><span>Аниме</span></li>
                            <li onClick={() => handleClick('Россия', setActiveCountries)}><span>Русское</span></li>
                            <li onClick={handleClick}><span>Рандом</span></li>
                        </div>
                    </div>
                </div>
            </ul>
        </Link >
    );
}

export default NavList;