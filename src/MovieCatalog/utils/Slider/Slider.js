import { useEffect, useState } from 'react'
import style from './Slider.module.css'
import { ReactComponent as NoMovieLogo } from '../../../icons/noMovie.svg'
import { Link } from 'react-router-dom'
import { ReactComponent as SlideArrow } from '../../../icons/slideArrow.svg'
import valueColor from '../parseFunc/valueColor'


const Slider = (props) => {
    const valueCalc = () => {
        let screen = window.innerWidth
        if (screen <= 480) return 2
        if (screen <= 767 && screen > 480) return 3
        if (screen <= 991 && screen > 767) return 4
        if (screen <= 1200 && screen > 991) return 6
        if (screen > 1200) return 7
    }

    const [position, setPosition] = useState(0)
    const [countShow, setCountShow] = useState(valueCalc())

    let changeValue = valueCalc()
    window.addEventListener('resize', (e) => {
        if (valueCalc() != changeValue) {
            setPosition(0)
            setCountShow(valueCalc())
        }
    });

    const len = props.content?.length
    const handleClickNext = () => {
        let step = valueCalc()
        if (countShow + valueCalc() <= len) setCountShow(countShow + valueCalc())
        else {
            step = len - countShow
            setCountShow(countShow + step)
        }

        if (countShow == len) {
            setPosition(0)
            setCountShow(valueCalc())
        }
        else setPosition(position + 160 * step)
    }
    const handleClickBack = () => {
        let step = valueCalc()
        if (countShow - valueCalc() > valueCalc()) setCountShow(countShow - valueCalc())
        else {
            setCountShow(valueCalc())
            step = position / 160
        }

        if (position == 0) {
            setPosition(160 * (len - valueCalc()))
            setCountShow(len)
        }
        else setPosition(position - 160 * step)
    }
    return (
        <div className={style.slider}>
            <div className={style.title}><h3>{props.title}</h3></div>
            <div className={style.sliderContainer}>
                <div style={props.content.length < valueCalc() ? {width:`calc(160px*${props.content.length})`} : {width:''}} className={style.sliderBlock}>
                    <button className={style.slider__btn + ' ' + style.prev} onClick={handleClickBack}><div><SlideArrow className={style.sliderIcon} /></div></button>
                    <div className={style.slide_wrap}>
                        <div className={style.content} style={{ left: `-${position}px` }}>
                            {props.content?.map((item, index) => <div /*onClick={() => props.handleClick(item.id)}*/ className={style.content__item} key={index}>
                                <div className={style.content__poster}>{(item.poster?.url || item.photo) ?
                                    <Link to={`/${props.contentType}/${item.id}`} onClick={() => props.handleClick(item.id)}>
                                        {item.rating?.kp && <div className={style.content__rating} style={valueColor(item.rating?.kp)} >{item.rating?.kp}</div>}
                                        <img src={item.poster?.url || item.photo} />
                                    </Link> :
                                    <div className={style.noPoster}><NoMovieLogo className={style.noMovieLogo} /></div>}
                                </div>
                                <div className={style.content__name}><span>{item.name || item.alternativeName}</span></div>
                            </div>)}
                        </div>
                    </div>
                    <button className={style.slider__btn + ' ' + style.next} onClick={handleClickNext}><div><SlideArrow className={style.sliderIcon + ' ' + style.next} /></div></button>
                </div>
            </div>
        </div>
    );
}

export default Slider;