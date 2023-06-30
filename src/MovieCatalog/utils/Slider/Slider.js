import { useState } from 'react'
import style from './Slider.module.css'
import { ReactComponent as NoMovieLogo } from '../../../icons/noMovie.svg'
import { Link } from 'react-router-dom'

const Slider = (props) => {

    let [position, setPosition] = useState(0)
    const len = props.content?.length

    const limit = len % 5 == 0 ? Math.floor(len / 5) - 1 : Math.floor(len / 5)
    const handleClickNext = () => {
        position == 640 * limit ? setPosition(0) : setPosition(position + 640)
    }
    const handleClickBack = () => {
        position == 0 ? setPosition(640 * limit) : setPosition(position - 640)
    }
    return (
        <div className={style.slider}>
            <div className={style.title}><h3>{props.title}</h3></div>
            <div className={style.sliderBlock}>
                <button className={style.slider__btn + ' ' + style.prev} onClick={handleClickBack}><div>{'<'}</div></button>
                <div className={style.slide_wrap}>
                    <div className={style.content} style={{ left: `-${position}px` }}>
                        {props.content?.map((item, index) => <div /*onClick={() => props.handleClick(item.id)}*/ className={style.content__item} key={index}>
                            <div className={style.content__poster}>{(item.poster?.url || item.photo) ?
                                <Link to={`/${props.contentType}/${item.id}`} onClick={() => props.handleClick(item.id)}> 
                                    <img src={item.poster?.url || item.photo} />
                                </Link> :
                                <div className={style.noPoster}><NoMovieLogo className={style.noMovieLogo} /></div>}
                            </div>
                            <div onClick={() => props.handleClick(item.id)}>{item.id}</div>
                            <div className={style.content__name}><span>{item.name || item.alternativeName}</span></div>
                        </div>)}
                    </div>
                </div>
                <button className={style.slider__btn + ' ' + style.next} onClick={handleClickNext}><div>{'>'}</div></button>
            </div>
        </div>
    );
}

export default Slider;