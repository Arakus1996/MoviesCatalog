import { useEffect, useState } from 'react';
import style from './InputRange.module.css'

const InputRange = (props) => {
    const [value, setValue] = useState(props.initialValue)
    const [editMode, setEditMode] = useState(false)

    useEffect(()=>{
        setValue(props.initialValue)
    },[props.isDefault])

    const handleChange = (e) => {
        setValue(e.target.value)
        props.setIsDefault()
    }
    const handleClick = (e) => {
        setValue(e.target.value)
        props.dispatchActiveFilters(value)
    }
    const handleClickText = () => {
        setEditMode(true)
    }
    const handleMouseLeave = (e) => {
        setValue(e.target.value)
        props.dispatchActiveFilters(value)
        setEditMode(false)
    }

    return (
        <div className={style.inputRange}>
            <span className={style.inputRangeName}>{props.name}</span>
            <div className={style.rangeSlider + ' ' + (value != props.initialValue ? style.active : ' ')}>
                <input
                    type="range"
                    min={props.range.min}
                    max={props.range.max}
                    step={props.range.step}
                    value={value}
                    onChange={handleChange}
                    onClick={handleClick}
                    />
            </div>
            <div className={style.rangeNumber}>
                {!editMode && <input type="text" value={value} onChange={handleChange} onClick={handleClickText}/>}
                {editMode && <input type="text" autoFocus={true} onChange={handleChange} onMouseLeave={handleMouseLeave}/>}
            </div>
        </div>
    );
}

export default InputRange;