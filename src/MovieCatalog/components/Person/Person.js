import { useDispatch, useSelector } from "react-redux"
import { getMoviesByPersonId, getPersonById } from "../../api/AxiosApi"
import { useEffect } from "react"
import style from "./Person.module.css"
import { Table, TableLine } from "../../utils/Table/Table"
import parseDate from "../../utils/parseFunc/parseData"
import Slider from "../../utils/Slider/Slider"
import { setMovieId, setPersonId } from "../../../store/reducers"
import { Link } from "react-router-dom"

const Person = () => {

    const dispatch = useDispatch()
    const idPerson = useSelector(state => state.movie.idPerson)
    const person = useSelector(state => state.movie.person)
    const moviesData = useSelector(state => state.movie.moviesData)

    useEffect(() => {
        dispatch(getPersonById(idPerson))
        dispatch(getMoviesByPersonId(idPerson))
    }, [idPerson, moviesData])

    const handleClickMovie = (id) => {
        dispatch(setMovieId(id))
    }
    const handleClickPerson = (id) => {
        dispatch(setPersonId(id))
    }

    const bestMovie = (movies) => {
        let moviesCopy = [...movies]
        let result =  moviesCopy.sort((a, b) => b.rating - a.rating).slice(0, 10)

        console.log(result)
        return result
    }

    return (
        <>
            {Object.keys(person).length && <div className={style.person}>
                <div className={style.mediaBlock}>
                    {person.photo && <div className={style.mediaBlock__poster}><img src={person.photo} /></div>}
                </div>
                <div className={style.discriptionBlock}>
                    <div className={style.discriptionBlock__name}><h2>{person.name}</h2></div>
                    <Table>
                        <TableLine name={"Карьера:"} values={person.profession}/>
                        <TableLine name={"Рост:"} values={person.growth + ' см'}/>
                        <TableLine name={"Дата рождения:"} values={parseDate(person.birthday) +' ('+ person.age + ')'}/>
                        <TableLine name={"Место рождения:"} values={person.birthPlace}/>
                    </Table>
                    <div>Сюда можно награды питушнуть</div>
                </div>
                <div className={style.etcBlock}>
                    <section className={style.etcBlock__discription}>

                    </section>
                    {moviesData?.length !== 0 && <Slider title={"Лучшие работы"+ ' c ' +person.name} contentType={'movie'} content={moviesData} handleClick={handleClickMovie} />}
                    {/* {movieData.similarMovies.length !== 0 && <Slider title={"Похожие фильмы"} content={movieData.similarMovies} handleClickMovie={handleClickMovie} />} */}
                </div>
            </div>}

        </>
    );
}

export default Person;