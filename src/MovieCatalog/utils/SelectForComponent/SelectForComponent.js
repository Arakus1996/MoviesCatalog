import { useState } from 'react';
import style from './SelectForComponent.module.css'
import { ReactComponent as LogoArrow } from '../../../icons/arrowDown.svg'

const SelectForComponent = (props) => {
    //Надо будет отправлять в стор выбранные select'ы даже если не нажали кнопку для отправки формы
    // чтобы фильтры сохранялись так же добавить сброс фильтров
    // надо чтобы были селекты с 1 выбором и с чекбоксами

    //  У меня теперь 2 компоненты селекта с дублированием кода ==> надо часть вынести

    const [isActive, setIsActive] = useState(false)
    const [selected, setSelected] = useState(null)
    return (
        <div className={style.select + ' ' + (isActive ? style.active : ' ')}>
            <div className={style.select__header}>
                <button
                    onClick={() => isActive ? setIsActive(false) : setIsActive(true)}
                    type='button' className={style.select__toggle}
                >
                    <span>{selected || props.name}</span>
                    <LogoArrow className={style.select__logo} />
                </button>
            </div>

            <div className={style.select__body}>
                {props.children}
            </div>
        </div>
    );
}

export default SelectForComponent;