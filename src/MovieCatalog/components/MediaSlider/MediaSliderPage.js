import style from './MediaSlider.module.css'
import DiscriptionMovie from './DiscriptionMovie/DiscriptionMovie'
import MediaBlock from './MediaBlock/MediaBlock'

const MediaSliderPage = (props) => {
    return (
        <div className={style.mediaSlider}>
            <img className={style.backgroundMediaSlider} src={props.movie?.poster?.url} />
            {/* <img className={style.backgroundMediaSlider} src={props.movie?.backdrop?.previewUrl} /> */}
            <div className={style.mediaSlider__content}>
                <DiscriptionMovie ageRating={props.movie?.ageRating} movieName={props.movie?.name} movieDescription={props.movie?.description} />
                <MediaBlock movieYear={props.movie?.year} video={props.movie?.videos?.trailers[1]?.url} />
            </div>
            <div className={style.pages}>
                <ul>
                    {/* Тут нужен будет полюбому рефакторинг дублирование кода */}
                    <li onClick={() => props.setCountPage(0)} className={props.countPage==0 ? style.active:''}></li>
                    <li onClick={() => props.setCountPage(1)} className={props.countPage==1 ? style.active:''}></li>
                    <li onClick={() => props.setCountPage(2)} className={props.countPage==2 ? style.active:''}></li>
                    <li onClick={() => props.setCountPage(3)} className={props.countPage==3 ? style.active:''}></li>
                    <li onClick={() => props.setCountPage(4)} className={props.countPage==4 ? style.active:''}></li>
                </ul>
            </div>
        </div>
    );
}

export default MediaSliderPage;