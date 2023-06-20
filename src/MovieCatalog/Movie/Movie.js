/////// Нужно ли переименовать Movie ???

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../api/AxiosApi";
import { useLocation } from "react-router-dom";
import style from './Movie.module.css'



const Movie = () => {
    let { state } = useLocation();
    let movie = state.movie
    console.log(state)


    return (
        <>
            <div className={style.movie}>
                <div className={style.mediaBlock}>
                    <div className={style.mediaBlock__poster}><img src={movie.poster.url} /></div>
                    <div className={style.mediaBlock__raiting}>
                        <div><span>КП:</span><span>{movie.rating.kp}</span></div>
                        <div><span>IMDb:</span><span>{movie.rating.imdb}</span></div>
                    </div>
                </div>
                <div className={style.discriptionBlock}>
                    <div className={style.discriptionBlock__name}><h2>{movie.name}</h2></div>
                    <div className={style.discriptionBlock__table}>
                        <table>
                            <tr>
                                <td><span>Жанр:</span></td>
                                <td>{movie.genres.map((genre, index) => <span key={index}>{genre.name}, </span>)}</td>
                            </tr>
                            <tr>
                                <td><span>Длительность:</span></td>
                                <td>{movie.movieLength}</td>
                            </tr>
                            <tr>
                                <td>qw</td>
                                <td>we</td>
                            </tr>
                            <tr>
                                <td>qw</td>
                                <td>we</td>
                            </tr>
                            <tr>
                                <td>qw</td>
                                <td>we</td>
                            </tr>
                            <tr>
                                <td>qw</td>
                                <td>we</td>
                            </tr>
                        </table>
                    </div>
                    <div className={style.discriptionBlock__discription}><p>{movie.description}</p></div>

                </div>
            </div>
        </>
    );
}

export default Movie;