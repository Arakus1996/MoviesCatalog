import style from './MovieCatalog.module.css'
import MediaSlider from './components/MediaSlider/MediaSlider'
import { filterAPI, getMovieById, getMoviesById, getMoviesInSinema } from './api/AxiosApi'
import { useEffect, useLayoutEffect } from 'react'
import Content from './components/Content/Content'
import { useDispatch, useSelector } from 'react-redux'
import Error from './components/common/error/Error'
import Preloader from './utils/Preloader/Preloader'
/////Убрал стрикт мод чтобы небыло повторного запроса  на сервер
export const MovieCatalog = () => {
    const moviesOnSale = useSelector(state => state.movie.moviesOnSaleData)
    const movieOnSaleId = useSelector(state => state.movie.movieOnSaleId)
    const movies = useSelector(state => state.movie.moviesData)
    const movie = useSelector(state => state.movie.movie)
    const countries = useSelector(state => state.movie.countriesData)
    const genres = useSelector(state => state.movie.genresData)
    const currentPage = useSelector(state => state.movie.currentPage)
    const perPage = useSelector(state => state.movie.perPage)
    const selectedSort = useSelector(state => state.movie.selectedSort)
    const movieType = useSelector(state => state.movie.movieType)
    const sortValue = useSelector(state => state.movie.sortValue)
    const activeFilters = useSelector(state => state.movie.activeFilters)
    const searchString = useSelector(state => state.movie.searchString)
    const errorData = useSelector(state => state.movie.error) 

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMoviesInSinema())
        dispatch(filterAPI.getCountries())
        dispatch(filterAPI.getGeners())
    }, [])
    useEffect(() => {
        dispatch(filterAPI.getMovie(currentPage, perPage, selectedSort[sortValue].sortField, searchString, activeFilters.movieType,
            activeFilters.genre, activeFilters.countrie, activeFilters.years, activeFilters.age,
            activeFilters.raitingKp, activeFilters.raitingImdb, activeFilters.budget, activeFilters.fees, activeFilters.newMovieDate,
            activeFilters.isTop))
    }, [currentPage, sortValue, activeFilters, searchString])
    useLayoutEffect(() => {
        if (movieOnSaleId !== null) dispatch(getMovieById(movieOnSaleId))
    }, [movieOnSaleId])

    return <div className={style.movieCatalog}>
        {
            !errorData &&
            <div>
                <MediaSlider movies={moviesOnSale} movie={movie} />
                <Content movies={movies} selectedSort={selectedSort}
                    countries={countries} genres={genres} movieType={movieType} activeFilters={activeFilters} />
            </div>
        }
        {errorData && <Error errorData={errorData} />}
    </div>
}