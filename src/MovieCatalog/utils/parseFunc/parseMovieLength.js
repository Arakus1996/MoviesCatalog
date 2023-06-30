const parseMovieLength = (movieLength) => {
    return `${Math.floor(movieLength / 60)}:${movieLength % 60} (${movieLength} мин.)`
}
export default parseMovieLength