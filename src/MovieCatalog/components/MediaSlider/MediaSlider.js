import { useEffect, useState } from 'react'
import MediaSliderPage from './MediaSliderPage'
import { useDispatch, useSelector } from 'react-redux'
import { setMovieOnSaleId } from '../../../store/reducers'

const MediaSlider = (props) => {
    const [countPage, setCountPage] = useState(0)
    const [isPlay, setIsPlay] = useState(false)
    const dispatch = useDispatch()

    const handleClickSlider = (num) => {
        setCountPage(num)
        setIsPlay(false)
        dispatch(setMovieOnSaleId(props.movies[num].id))
    }

    return (
        <>
        {
            <MediaSliderPage movie={props.movie} setCountPage={setCountPage} countPage={countPage} 
                            handleClick={handleClickSlider} isPlay={isPlay} setIsPlay={setIsPlay}/>}
        </>
    )
}

export default MediaSlider