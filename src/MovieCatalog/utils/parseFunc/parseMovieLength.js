const parseMovieLength = (movieLength) => {
    return `${Math.floor(movieLength / 60)}:${(movieLength % 60) < 10 ? '0'+(movieLength % 60) : movieLength % 60}`
}
export default parseMovieLength