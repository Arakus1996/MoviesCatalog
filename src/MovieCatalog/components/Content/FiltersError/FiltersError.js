import {ReactComponent as FiltrLogo} from '../../../../icons/filter.svg'
import style from './FiltersError.module.css'

const FiltersError = () => {
    return (
        <div className={style.errorFilters}>
            <div><FiltrLogo className={style.errorFilters__logo} /></div>
            <div><span className={style.errorFilters__text}>Ничего не найдено</span></div>
            <div><span className={style.errorFilters__advice}>Попробуйте расслабить или сбросить фильтры</span></div>
        </div>
    );
}

export default FiltersError;