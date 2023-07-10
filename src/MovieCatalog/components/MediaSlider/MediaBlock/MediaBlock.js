import { useDispatch } from 'react-redux'
import Button from '../../../utils/Button/Button'
import style from './MediaBlock.module.css'
import ReactPlayer from 'react-player'
import { setActiveYears } from '../../../../store/reducers'
import { ReactComponent as LogoPlay } from '../../../../icons/play.svg'

const MediaBlock = (props) => {
    const dispatch = useDispatch()
    let isPlay = props.isPlay
    let setIsPlay = props.setIsPlay
    return (
        <div className={style.mediaBlock}>
            <div><Button onClick={() => dispatch(setActiveYears(props.movieYear))} className={style.movYear} text={props.movieYear} /></div>
            <div className={style.mediaBlock__media}>
                {props.video && <div className={style.player}>
                    <ReactPlayer height={200} width={320} url={props.video} light={!isPlay} controls={true} playing={isPlay} />
                    <div onClick={() => { setIsPlay(true) }} className={style.fakePlayer__play} style={isPlay ? { display: 'none' } : { display: 'block' }}>
                        <LogoPlay className={style.play__logo} />
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default MediaBlock