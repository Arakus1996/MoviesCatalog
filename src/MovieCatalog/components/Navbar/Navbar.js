import NavList from './NavList/NavList'
import style from './Navbar.module.css'
import {ReactComponent as LogoFind} from '../../../icons/find.svg'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { setSearchString } from '../../../store/reducers'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [findState, setFindState] = useState(null)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setSearchString(findState))
    }
    const handleChange = (event) => {
        setFindState(event.target.value)
    }

    return (
        <nav>
            <div className={style.navHead}>
            <Link to="/"><strong className={style.navLogo}>Кинопоказ</strong></Link>
                <div className={style.findForm}>
                    <input type="text" placeholder='Поиск...' onChange={handleChange} />
                    <Link to="/"><button className={style.btnFindForm} onClick={handleClick}><LogoFind className={style.logoBtnFind}/></button></Link>
                </div>
            </div>
            <NavList/>
        </nav>
    )
}

export default Navbar