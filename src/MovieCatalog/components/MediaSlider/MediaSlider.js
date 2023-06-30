import { useState } from 'react'
import MediaSliderPage from './MediaSliderPage'
import { useDispatch, useSelector } from 'react-redux'
import { setMovieOnSaleId } from '../../../store/reducers'

////// Прокинул диспатч и юз селектор  для get запроса фильма по id делать???

const MediaSlider = (props) => {
    const [countPage, setCountPage] = useState(0)
    const dispatch = useDispatch()
    const movieId = useSelector(state => state.movie.movieOnSaleId)
    const handleClickSlide = (id) =>{
        dispatch(setMovieOnSaleId(id))
    }
    let movie = props.movies[countPage]
    return (
        <>
            <MediaSliderPage movie={movie} setCountPage={setCountPage} countPage={countPage} handleClick={handleClickSlide}/>
        </>
    )
}

export default MediaSlider