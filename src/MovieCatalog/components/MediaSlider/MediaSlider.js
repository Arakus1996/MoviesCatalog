import { useState } from 'react'
import MediaSliderPage from './MediaSliderPage'

const MediaSlider = (props) => {
    const [countPage, setCountPage] = useState(0)
    
    let movie = props.movies[countPage]
    return (
        <>
            <MediaSliderPage movie={movie} setCountPage={setCountPage} countPage={countPage}/>
        </>
    )
}

export default MediaSlider