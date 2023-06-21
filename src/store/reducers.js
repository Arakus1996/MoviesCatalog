import { createSlice } from "@reduxjs/toolkit"

// Надо реализовать фильтрацию по чекбоксам, массивы объектов затянул надо как то дополнять api фильтрами
// мб массив идентификаторов ??????  

const initialState = {
    idMovie: 666,
    moviesOnSaleData: [],
    movie: {},
    moviesData: [],
    countriesData: [],
    genresData: [],
    movieType: [
        { name: "Фильмы", slug: 1 },
        { name: "Сериалы", slug: 2 },
        { name: "Мультфильмы", slug: 3 },
        { name: "Аниме", slug: 4 },
        { name: "Мультсериалы", slug: 5 },
        { name: "ТВ-шоу", slug: 6 }
    ],
    searchString: null,
    activeFilters: {
        genre: null,
        movieType: null,
        countrie: null,
        years: null,
        age: null,
        raitingKp: null,
        raitingImdb: null,
        budget: null,
        fees: null,
        newMovieDate: null,
        isTop: null
    },
    currentPage: 1,
    perPage: 5,
    // totalCount: 0,
    totalPages: 0,
    selectedSort: [
        { name: "Популярности", sortField: "votes.kp" },
        { name: "Рейтингу", sortField: "rating.kp" },
        { name: "Годам", sortField: "year" }
    ],
    sortValue: 0,
    isDefault: true
}

const movieSlice = createSlice({
    name: 'MOVIES_ACTION',
    initialState: initialState,
    reducers: {
        setMovieId(state, action) {
            state.idMovie = action.payload
        },
        setMovieForSlider(state, action) {
            // state.movieData.push(action.payload)
            state.moviesOnSaleData = action.payload.docs
        },
        setMovie(state, action) {
            state.movieOnSale = action.payload
        },
        setMovies(state, action) {
            state.moviesData = action.payload.docs
            state.totalPages = action.payload.pages
            // state.totalCount = action.payload.totalCount
        },
        setCounties(state, action) {
            state.countriesData = action.payload
        },
        setGenres(state, action) {
            state.genresData = action.payload
        },
        // setTypeNumber(state, action) {
        //     state.movieTypeNumber = action.payload
        // },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setSortValue(state, action) {
            state.sortValue = action.payload
        },
        setSearchString(state, action) {
            state.searchString = action.payload
        },
        setActiveGenres(state, action) {
            state.activeFilters.genre = action.payload
        },
        setActiveMovieType(state, action) {
            state.activeFilters.movieType = state.movieType.find(obj => obj.name === action.payload)
        },
        setActiveCountries(state, action) {
            state.activeFilters.countrie = action.payload
        },
        setActiveYears(state, action) {
            state.activeFilters.years = action.payload
        },
        setActiveAge(state, action) {
            state.activeFilters.age = action.payload
        },
        setActiveRaitingKp(state, action) {
            state.activeFilters.raitingKp = action.payload
        },
        setActiveRaitingImdb(state, action) {
            state.activeFilters.raitingImdb = action.payload
        },
        setActiveBudget(state, action) {
            state.activeFilters.budget = action.payload
        },
        setActiveFees(state, action) {
            state.activeFilters.fees = action.payload
        },
        setNewMovieDate(state, action) {
            state.activeFilters.newMovieDate = action.payload
        },
        setIsTop(state, action) {
            state.activeFilters.isTop = action.payload
            state.sortValue = 1
        },
        setNotDefaultFilter(state) {
            state.isDefault = false
        },
        setDefaultFilters(state) {
            state.activeFilters = initialState.activeFilters
            state.isDefault = true
        }

    }
})

export default movieSlice.reducer
export const { setMovieId, setMovieForSlider, setMovieSlider, setMovie, setMovies, setCounties, setGenres,
    setCurrentPage, setSortValue, setSearchString, setTypeNumber, setActiveGenres, setActiveMovieType, setActiveCountries, setActiveYears,
    setActiveAge, setActiveRaitingKp, setActiveRaitingImdb, setActiveBudget, setActiveFees, setNewMovieDate, setIsTop, 
    setDefaultFilters, setNotDefaultFilter } = movieSlice.actions
