import axios from "axios";
import { setCounties, setGenres, setMovieForSlider, setMovie, setMovies} from "../../store/reducers";

//////// ПОфиксить траблу по которой фильтр по ЖАНР и СТРАНА вместе не работают!

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

// export const getMovies = (currentPage, perPage) => {
//     return async (dispatch) => {
//         const response = await api.get(`movie?page=${currentPage}&limit=${perPage}`)
//         dispatch(setMovies(response.data))
//     }
// }

export const getMoviesInSinema = () => {
    return async (dispatch) => {
        const response = await api.get(`movie?page=1&limit=5&ticketsOnSale=true`)
        dispatch(setMovieForSlider(response.data))
    }
}
export const getMovieById = (id) => {
    return async (dispatch) => {
        const response = await api.get(`/movie/${id}`)
        dispatch(setMovie(response.data))
    }
}


// В стейте можно объект массивов, если по кажому имени буду подсовывать массив, то тут по имени смогу мапом
// прогнать массив и генерировать фильтры
export const filterAPI = {
    getMovie(currentPage, perPage, sortField, searchString, movieTypeNumber, genre, countrie, years, age, raitingKp, 
        raitingImdb, budget, fees, newMovieDate, isTop) {
        return async (dispatch) => {
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
            //21.05.2023-21.06.2023
            // const response = await api.get(`movie?page=${currentPage}&limit=${perPage}`)
            dispatch(setMovies(response.data))
        }
    },
    
    getCountries(){
        return async (dispatch) => {
            const response = await apiOld.get(`movie/possible-values-by-field?field=countries.name`)
            dispatch(setCounties(response.data))
        }
    },
    getGeners(){
        return async (dispatch) => {
            const response = await apiOld.get(`movie/possible-values-by-field?field=genres.name`)
            dispatch(setGenres(response.data))
        }
    }

}

