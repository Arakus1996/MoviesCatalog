
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById, getMoviesBySimilarId } from "../../api/AxiosApi";
import style from './Movie.module.css'
import ReactPlayer from 'react-player'
import Slider from "../../utils/Slider/Slider";
import RatingBlock from "./RatingBlock/RatingBlock";
import { setMovieId, setPersonId } from "../../../store/reducers";
import { Table, TableLine } from "../../utils/Table/Table";
import parseDate from "../../utils/parseFunc/parseData";
import parseMoney from "../../utils/parseFunc/parseMoney";
import parseMovieLength from "../../utils/parseFunc/parseMovieLength";
import Preloader from "../../utils/Preloader/Preloader";

const Movie = () => {
    const dispatch = useDispatch()
    const idMovie = useSelector(state => state.movie.idMovie)
    const movieData = useSelector(state => state.movie.movie)
    const moviesData = useSelector(state => state.movie.moviesData)
    const isFetching = useSelector(state => state.movie.isFetching)

    useEffect(() => {
        dispatch(getMovieById(idMovie))
        dispatch(getMoviesBySimilarId(idMovie))
    }, [idMovie])

    const handleClickMovie = (id) => {
        dispatch(setMovieId(id))
    }
    const handleClickPerson = (id) => {
        dispatch(setPersonId(id))
    }

    const filterPerson = (personData, profession) => {
        return personData.filter(value => value.enProfession == profession)
    }

    return (
        <>
            {isFetching ? <Preloader /> : Object.keys(movieData).length && <div className={style.movie}>
            <div className={style.discriptionBlock__name}><h2>{movieData.name}</h2></div>
                <div className={style.mediaBlock}>
                    <div className={style.mediaBlock__poster}><img src={movieData.poster?.url} /></div>
                    <div className={style.mediaBlock__raiting}>
                        <RatingBlock ratingName={'КП'} value={movieData.rating.kp} />
                        <RatingBlock ratingName={'IMDb'} value={movieData.rating.imdb} />
                    </div>
                    <div className={style.mediaBlock__trailer}>
                        <ReactPlayer height={200} width={'100%'} url={movieData.videos.trailers[0]?.url} controls={true} />
                    </div>
                </div>
                <div className={style.discriptionBlock}>
                    {/* <div className={style.discriptionBlock__name}><h2>{movieData.name}</h2></div> */}
                    <Table>
                        <TableLine name={"Жанр:"} values={movieData.genres} />
                        <TableLine name={"Страна:"} values={movieData.countries} />
                        <TableLine name={"Слоган:"} values={movieData.slogan} />
                        <TableLine name={"Год:"} values={movieData.year} />
                        <TableLine name={"Длительность:"} values={parseMovieLength(movieData.movieLength) + ` (${movieData.movieLength} мин.)`} />
                        <TableLine name={"Режисер:"} values={filterPerson(movieData.persons, "director")} person={"director"} />
                        <TableLine name={"В главных ролях:"} values={filterPerson(movieData.persons, "actor")} person={"actor"} />
                        <TableLine name={"Сценарий:"} values={filterPerson(movieData.persons, "writer")} person={"writer"} />
                        <TableLine name={"Продюсер:"} values={filterPerson(movieData.persons, "producer")} person={"producer"} />
                        <TableLine name={"Оператор:"} values={filterPerson(movieData.persons, "operator")} person={"operator"} />
                        <TableLine name={"Композитор:"} values={filterPerson(movieData.persons, "composer")} person={"composer"} />
                        <TableLine name={"Художник:"} values={filterPerson(movieData.persons, "designer")} person={"designer"} />
                        <TableLine name={"Монтаж:"} values={filterPerson(movieData.persons, "editor")} person={"editor"} />
                        <TableLine name={"Премьера в Мире:"} values={parseDate(movieData.premiere.world)} />
                        <TableLine name={"Премьера в России:"} values={parseDate(movieData.premiere.russia)} />
                        {movieData.ageRating != undefined && <TableLine className={style.rating} name={"Возраст:"} values={movieData.ageRating + '+'} />}
                        <TableLine className={style.rating} name={"Рейтинг MPAA:"} values={movieData.ratingMpaa} />
                        <TableLine name={"Бюджет:"} values={parseMoney(movieData.budget.value, movieData.budget.currency)} />
                        <TableLine name={"Сборы:"} values={parseMoney(movieData.fees.world.value, movieData.fees.world.currency)} />
                        <TableLine name={"Краткое описание:"} values={movieData.shortDescription} />
                    </Table>

                </div>
                <div className={style.etcBlock}>
                    <section className={style.etcBlock__discription}>
                        <h3>Описание</h3>
                        <p>{movieData.description}</p>
                    </section>
                    {movieData.sequelsAndPrequels.length !== 0 && <Slider title={"Сиквелы и приквелы"} contentType={'movie'} content={movieData.sequelsAndPrequels} handleClick={handleClickMovie} />}
                    {movieData.similarMovies.length !== 0 && <Slider title={"Похожие фильмы"} contentType={'movie'} content={moviesData} handleClick={handleClickMovie} />}
                    {movieData.persons.length !== 0 && <Slider title={"В фильме снимались"} contentType={'person'} content={filterPerson(movieData.persons, "actor")} handleClick={handleClickPerson} />}
                </div>
            </div>}

        </>
    );
}

export default Movie;