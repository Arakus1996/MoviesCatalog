import style from './MovieCatalog.module.css'
import Navbar from './components/Navbar/Navbar'
import MediaSlider from './components/MediaSlider/MediaSlider'
import { filterAPI, getMoviesById, getMoviesInSinema } from './api/AxiosApi'
import { useEffect } from 'react'
import Content from './components/Content/Content'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


export const MovieCatalog = () => {
    const moviesOnSale = useSelector(state => state.movie.moviesOnSaleData)
    const movies = useSelector(state => state.movie.moviesData)
    const countries = useSelector(state => state.movie.countriesData)
    const genres = useSelector(state => state.movie.genresData)
    const currentPage = useSelector(state => state.movie.currentPage)
    const perPage = useSelector(state => state.movie.perPage)
    const selectedSort = useSelector(state => state.movie.selectedSort)
    const movieType = useSelector(state => state.movie.movieType)
    const sortValue = useSelector(state => state.movie.sortValue)
    const activeFilters = useSelector(state => state.movie.activeFilters)
    const searchString = useSelector(state => state.movie.searchString)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMoviesInSinema())
        dispatch(filterAPI.getCountries())
        dispatch(filterAPI.getGeners())
    }, [])
    useEffect(() => {
        // dispatch(getMovies(currentPage, perPage))
        dispatch(filterAPI.getMovie(currentPage, perPage, selectedSort[sortValue].sortField, searchString, activeFilters.movieType,
            activeFilters.genre, activeFilters.countrie, activeFilters.years, activeFilters.age,
            activeFilters.raitingKp, activeFilters.raitingImdb, activeFilters.budget, activeFilters.fees))
    }, [currentPage, sortValue, activeFilters, searchString])

    return <div className={style.movieCatalog}>
        <Navbar />
        <MediaSlider movies={moviesOnSale} />
        <Content movies={movies} selectedSort={selectedSort}
            countries={countries} genres={genres} movieType={movieType} activeFilters={activeFilters} />
        {/* ПОка пагинатор тут потом мб в Movies */}
    </div>
}