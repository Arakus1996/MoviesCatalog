import { useState } from 'react';
import style from './Select.module.css'
import { ReactComponent as LogoArrow } from '../../../icons/arrowDown.svg'
import {ReactComponent as LogoCheck} from '../../../icons/check.svg'

const Select = (props) => {  
    // надо чтобы были селекты с 1 выбором и с чекбоксами
    const activeFilter = props.activeFilter
    const [isActive, setIsActive] = useState(false)

    const handleClick = (option) =>{    
        activeFilter===option ? props.dispatchActiveFilters(null) : props.dispatchActiveFilters(option)
    }

    return (
        <div className={style.select + ' ' + (isActive ? style.active : ' ')}>
            <div className={style.select__header}>
                <button
                    onClick={() => isActive ? setIsActive(false) : setIsActive(true)}
                    type='button' className={style.select__toggle}
                >
                    <span>{props.name}</span>
                    <div className={style.select_arrow}><LogoArrow className={style.select__logo} /></div>
                </button>
            </div>

            <div className={style.select__body}>
                <ul className={style.select__options}>
                    {props.options.map((option, index) =>
                        <li key={index} onClick={() => handleClick(option.name)} className={style.select__option}>
                            <span>{option.name}</span> 
                            <LogoCheck className={style.select__check + ' ' + (activeFilter === option.name ? style.active : ' ')}/>
                        </li>)}
                </ul>
            </div>
        </div>
    );
}

export default Select;