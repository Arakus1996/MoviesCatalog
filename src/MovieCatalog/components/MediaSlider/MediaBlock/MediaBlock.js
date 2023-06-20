import Button from '../../../utils/Button/Button'
import style from './MediaBlock.module.css'
import ReactPlayer from 'react-player'

const MediaBlock = (props) => {
    return (
        <div className={style.mediaBlock}>
            <Button className={style.movYear} text={props.movieYear} />
            {/* <Button text='456' /> */}
            <div className={style.mediaBlock__media}>
                <ReactPlayer height={240} width={400} url={props.video} controls={true}/>
                {/* <img src='#' /> */}
            </div>
        </div>
    )
}

export default MediaBlock