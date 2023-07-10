import style from './MediaSlider.module.css'
import DiscriptionMovie from './DiscriptionMovie/DiscriptionMovie'
import MediaBlock from './MediaBlock/MediaBlock'

const MediaSliderPage = (props) => {
    console.log(props.countPage)
    return (
        <div className={style.mediaSlider}>
            <img className={style.backgroundMediaSlider} src={props.movie?.backdrop?.url} />
            <div className={style.mediaSlider__content}>
                <DiscriptionMovie ageRating={props.movie?.ageRating} movieName={props.movie?.name} movieDescription={props.movie?.description} movieId={props.movie?.id} />
                <MediaBlock movieYear={props.movie?.year} video={props.movie?.videos?.trailers[0]?.url} isPlay={props.isPlay} setIsPlay={props.setIsPlay}/>
            </div>
            <div className={style.pages}>
                <ul>
                    <li onClick={() => props.handleClick(0)} className={props.countPage==0 ? style.active:''}></li>
                    <li onClick={() => props.handleClick(1)} className={props.countPage==1 ? style.active:''}></li>
                    <li onClick={() => props.handleClick(2)} className={props.countPage==2 ? style.active:''}></li>
                    <li onClick={() => props.handleClick(3)} className={props.countPage==3 ? style.active:''}></li>
                    <li onClick={() => props.handleClick(4)} className={props.countPage==4 ? style.active:''}></li>
                </ul>
            </div>
        </div>
    );
}

export default MediaSliderPage;