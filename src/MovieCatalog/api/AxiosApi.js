import axios from "axios";
import { setCounties, setGenres, setMovieForSlider, setMovie, setMovies, setPerson, setError, setIsFetching, setMovieOnSaleId } from "../../store/reducers";

const api = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1.3/',
    headers: {
        'X-API-KEY': 'MAPDSHE-2H64WA8-P501VVF-RXSBMZS',
        'accept': 'application/json'
    }
})

const apiOld = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1/',
    headers: {
        'X-API-KEY': 'MAPDSHE-2H64WA8-P501VVF-RXSBMZS',
        'accept': 'application/json'
    }
})

export const getMoviesInSinema = (id) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`movie?page=1&limit=5&ticketsOnSale=true`)
            dispatch(setMovieForSlider(response.data))
            dispatch(setMovieOnSaleId(response.data.docs[0].id))  
        }
        catch (e) { 
            dispatch(setError(e.response.data))
        }
    }
}
export const getMovieById = (id) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`/movie/${id}`)
            dispatch(setMovie(response.data))
        }
        catch (e) {
            dispatch(setError(e.response.data))
        }
    }
}
export const getPersonById = (id) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        try {
            const response = await apiOld.get(`/person/${id}`)
            dispatch(setPerson(response.data))
        }
        catch (e) {
            dispatch(setError(e.response.data))
        }
        dispatch(setIsFetching(false))
    }
}

export const getMoviesByPersonId = (id) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        try {
            const response = await api.get(`/movie?page=1&limit=10&persons.id=${id}`)
            dispatch(setMovies(response.data))
        }
        catch (e) {
            dispatch(setError(e.response.data))
        }
        dispatch(setIsFetching(false))
    }
}

export const getMoviesBySimilarId = (id) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        try {
            const response = await api.get(`/movie?page=1&limit=10&similarMovies.id=${id}`)
            dispatch(setMovies(response.data))
        }
        catch (e) {
            dispatch(setError(e.response.data))
        }
        dispatch(setIsFetching(false))
    }
}

export const filterAPI = {
    getMovie(currentPage, perPage, sortField, searchString, movieTypeNumber, genre, countrie, years, age, raitingKp,
        raitingImdb, budget, fees, newMovieDate, isTop) {
        return async (dispatch) => {
            dispatch(setIsFetching(true))
            try {
                const response = await api.get(`movie?sortField=${sortField}&sortType=-1&page=${currentPage}&limit=${perPage}
                ${searchString ? `&name=${searchString}` : ''}
                ${movieTypeNumber ? `&typeNumber=${movieTypeNumber.slug}` : ''}
                ${years ? `&year=${years.from}-${years.to}` : ''}
                ${raitingKp ? `&rating.kp=${raitingKp.from}-${raitingKp.to}` : ''}
                ${raitingImdb ? `&rating.imdb=${raitingImdb.from}-${raitingImdb.to}` : ''}
                ${age ? `&ageRating=1-${age}` : ''}
                ${genre ? `&genres.name=${genre}` : ''}
                ${countrie ? `&countries.name=${countrie}` : ''}
                ${budget ? `&budget.value=${budget}` : ''}
                ${fees ? `&fees.world.value=${fees}` : ''}
                ${newMovieDate ? `&premiere.world=${newMovieDate}` : ''}
                ${isTop ? `&top250=${isTop}` : ''}
                `)
                dispatch(setMovies(response.data))
            } catch (e) {
                dispatch(setError(e.response.data))
            }
            dispatch(setIsFetching(false))
        }
    },

    getCountries() {
        return async (dispatch) => {
            try {
                const response = await apiOld.get(`movie/possible-values-by-field?field=countries.name`)
                dispatch(setCounties(response.data))
            } catch (e) {
                dispatch(setError(e.response.data))
            }
        }
    },
    getGeners() {
        return async (dispatch) => {
            try {
                const response = await apiOld.get(`movie/possible-values-by-field?field=genres.name`)
                dispatch(setGenres(response.data))
            }
            catch (e) {
                dispatch(setError(e.response.data))
            }
        }
    }

}

