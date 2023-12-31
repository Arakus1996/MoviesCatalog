import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    idMovie: null,
    idPerson: null,
    moviesOnSaleData: [],
    movieOnSaleId: null,
    movie: [],
    person: [],
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
    totalPages: 0,
    selectedSort: [
        { name: "Популярности", sortField: "votes.kp" },
        { name: "Рейтингу", sortField: "rating.kp" },
        { name: "Годам", sortField: "year" }
    ],
    sortValue: 0,
    isDefault: true,
    error: null,
    isFetching: false
}

const movieSlice = createSlice({
    name: 'MOVIES_ACTION',
    initialState: initialState,
    reducers: {
        setMovieId(state, action) {
            state.idMovie = action.payload
        },
        setPersonId(state, action) {
            state.idPerson = action.payload
        },
        setMovieOnSaleId(state, action) {
            state.movieOnSaleId = action.payload
        },
        setMovieForSlider(state, action) {
            state.moviesOnSaleData = action.payload.docs
        },
        setMovie(state, action) {
            state.movie = action.payload
        },
        setPerson(state, action) {
            state.person = action.payload
        },
        setMovies(state, action) {
            state.moviesData = action.payload.docs
            state.totalPages = action.payload.pages
        },
        setCounties(state, action) {
            state.countriesData = action.payload
        },
        setGenres(state, action) {
            state.genresData = action.payload
        },
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
        },
        setError(state, action) {
            state.error = action.payload
        },
        setIsFetching(state, action) {
            state.isFetching = action.payload
        }

    }
})

export default movieSlice.reducer
export const { setMovieId, setPersonId, setMovieOnSaleId, setMovieForSlider, setMovieSlider, setMovie, setPerson, setMovies, setCounties, setGenres,
    setCurrentPage, setSortValue, setSearchString, setTypeNumber, setActiveGenres, setActiveMovieType, setActiveCountries, setActiveYears,
    setActiveAge, setActiveRaitingKp, setActiveRaitingImdb, setActiveBudget, setActiveFees, setNewMovieDate, setIsTop,
    setDefaultFilters, setNotDefaultFilter, setError, setIsFetching } = movieSlice.actions
