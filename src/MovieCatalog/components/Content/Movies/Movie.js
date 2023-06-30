import { Link } from 'react-router-dom';
import Button from '../../../utils/Button/Button';
import style from './Movies.module.css'
import { useDispatch } from 'react-redux';
import { setMovieId } from '../../../../store/reducers';
//////Тут где отсутствует постер добавить заглушку
const Movie = (props) => {
    let movie = props.movie
    const dispatch = useDispatch()
    console.log(movie)
    return (
        <div className={style.movieCard}>
            <Link to={`/movie/${movie.id}`} state={{ movie }} onClick={() => dispatch(setMovieId(movie.id))}>
                {<img className={style.moviePoster} src={movie?.poster?.url}/> || <div className={style.noMoviePoster}></div>}
            </Link>
            <div className={style.movieCard_info}>
                <div className={style.movieInfo}>
                    <div className={style.movieInfo_section}>
                    <Link to={`/movie/${movie.id}`} state={{ movie }} onClick={() => dispatch(setMovieId(movie.id))}>
                        <h2 className={style.movieInfo_name}>{movie.name}</h2>
                    </Link>
                        <p className={style.movieInfo_description}>
                            <span><b>Жанр:</b> {movie.genres.map((genre, index) => <span key={index}>{genre.name}, </span>)}</span>
                            <span><b>Премьера(РФ):</b> {movie.premiere?.russia}</span>
                            <span><b>Режисер:</b> dasdasdas</span>
                            <span><b>В ролях:</b> {movie.persons?.slice(0, 11).map(person => <span key={person.id}>{person.name}, </span>)}</span>
                            <span><b>Описание:</b> {movie.shortDescription}</span>
                        </p>
                    </div>
                    <div className={style.movieInfo_rating}>
                        <div><span>КП:</span><span>{movie.rating.kp}</span></div>
                        <div><span>IMDb:</span><span>{movie.rating.imdb}</span></div>
                        <div><span>{movie.movieLength}</span></div>
                    </div>
                </div>
                <div className={style.btnWatch}>
                    <Button text='Смотреть' />
                </div>
            </div>
        </div>
    );
}

export default Movie;