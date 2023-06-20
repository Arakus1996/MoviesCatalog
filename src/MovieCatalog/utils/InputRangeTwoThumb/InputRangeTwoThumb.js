import { useEffect, useState } from 'react'
import style from './InputRangeTwoThumb.module.css'
// Надо будет переделать range slider сделать кастомный, 
//чтобы он во всех браузерах норм был
// Добавить валидацию

const InputRangeTwoThumb = (props) => {
    const [lowerValue, setLowerValue] = useState(props.min)
    const [upperValue, setUpperValue] = useState(props.max)
    const range = {
        from:lowerValue,
        to:upperValue
    }
    const handleChangeLowValue = (event) => {
        setLowerValue(event.target.value)
        props.setIsDefault(false)
    }
    const handleChangeUppValue = (event) => {
        setUpperValue(event.target.value)
        props.setIsDefault(false)
    }
    const handleClick = () => {
        props.dispatchActiveFilters(range)
    }

    useEffect(()=>{
        setLowerValue(props.min)
        setUpperValue(props.max)
    },[props.isDefault])

    return (
        <div className={style.inputRange}>
            <span className={style.inputRangeName}>{props.name}</span>
            <div className={style.rangeSlider}>
                <form>
                    <input
                        id="lower"
                        type="range"
                        min={props.min}
                        max={props.max}
                        step={props.step}
                        value={lowerValue}
                        onChange={handleChangeLowValue} 
                        onClick={handleClick}/>
                    <input
                        id="upper"
                        type="range"
                        min={props.min}
                        max={props.max}
                        step={props.step}
                        value={upperValue}
                        onChange={handleChangeUppValue}
                        onClick={handleClick}
                    />
                </form>
            </div>
            <div className={style.rangeNumber}>
                <input type="text" onChange={(event) => setLowerValue(event.target.value)} value={lowerValue > upperValue ? upperValue : lowerValue} />
                <input type="text" onChange={(event) => setUpperValue(event.target.value)} value={lowerValue > upperValue ? lowerValue : upperValue} />
            </div>
        </div>
    );
}

export default InputRangeTwoThumb;