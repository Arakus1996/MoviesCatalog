import { Link } from 'react-router-dom';
import style from './Movies.module.css'
import { useDispatch } from 'react-redux';
import { setMovieId } from '../../../../store/reducers';
import parseMovieLength from '../../../utils/parseFunc/parseMovieLength';
import { ReactComponent as NoMovieLogo } from '../../../../icons/noMovie.svg'

const Movie = (props) => {
    let movie = props.movie
    const dispatch = useDispatch()
    return (
        <div className={style.movieCard}>
            <Link to={`/movie/${movie.id}`} state={{ movie }} onClick={() => dispatch(setMovieId(movie.id))}>
                {movie.poster?.url ? <img className={style.moviePoster} src={movie?.poster?.url} /> : <div className={style.noMoviePoster}><NoMovieLogo className={style.noMoviePoster__logo}/></div>}
            </Link>
            <div className={style.movieCard_info}>
                <div className={style.movieInfo}>
                    <div className={style.movieInfo_section}>
                        <Link to={`/movie/${movie.id}`} state={{ movie }} onClick={() => dispatch(setMovieId(movie.id))}>
                            <h2 className={style.movieInfo_name}>{movie.name}</h2>
                        </Link>
                        <p className={style.movieInfo_description}>
                            <span><b>Жанр:</b> {movie.genres.map((genre, index) => <span key={index}>{genre.name}, </span>)}</span>
                            <span><b>Год:</b> {movie.year}</span>
                            <span><b>Страна:</b> {movie.countries.map((item, index) => <span key={index}>{item.name}</span>)}</span>
                            <span><b>Описание:</b> {movie.shortDescription}</span>
                        </p>
                    </div>
                    <div className={style.movieInfo_rating}>
                        <div><span>КП:</span><span>{movie.rating.kp}</span></div>
                        <div><span>IMDb:</span><span>{movie.rating.imdb}</span></div>
                        {movie.movieLength && <div><span>{parseMovieLength(movie.movieLength)}</span></div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movie;