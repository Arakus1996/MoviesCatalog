import style from './Content.module.css'
import Filters from './Filters/Filters'
import Movies from './Movies/Movies'
import SortingBlock from './SortingBlock/SortingBlock'



const Content = (props) => {
    return (
        <>
            <SortingBlock selectedSort={props.selectedSort} />
            <div className={style.content}>
                <Filters countries={props.countries} genres={props.genres}
                    movieType={props.movieType} activeFilters={props.activeFilters} />
                <Movies movies={props.movies} />
            </div>
        </>
    )
}

export default Content