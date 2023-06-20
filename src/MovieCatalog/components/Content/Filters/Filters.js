import FilterList from "./Filter/FilterList";
import style from './Filters.module.css'

const Filters = (props) => {
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <form className={style.movieFiltersForm} onSubmit={handleSubmit}>
            <FilterList countries={props.countries} genres={props.genres}
                movieType={props.movieType} activeFilters={props.activeFilters}/>
        </form>
    );
}

export default Filters;