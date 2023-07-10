import Button from '../../../utils/Button/Button'
import style from './DiscriptionMovie.module.css'
import { ReactComponent as LogoPg } from '../../../../icons/pg.svg'
import { Link } from 'react-router-dom'

const DiscriptionMovie = (props) => {
    return (
        <div className={style.descriptionBlock}>
            <section className={style.description}>
                <h1>{props.movieName}</h1>
                <p>{props.movieDescription}</p>
            </section>
            <div className={style.descriptionBlock_btn}>
                <Link to={`/movie/${props.movieId}`} >
                    <Button text='Подробнее' />
                </Link>
                <div className={style.ageRaiting}>
                    <LogoPg className={style.ageRaiting__logo} />
                    <span className={style.ageRaiting__text}>{props.ageRating}</span>
                </div>
            </div>
        </div>
    )
}

export default DiscriptionMovie