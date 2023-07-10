import { useSelector } from 'react-redux'
import style from './Content.module.css'
import Filters from './Filters/Filters'
import FiltersError from './FiltersError/FiltersError'
import Movies from './Movies/Movies'
import SortingBlock from './SortingBlock/SortingBlock'
import Preloader from '../../utils/Preloader/Preloader'

const Content = (props) => {
    const isFetching = useSelector(state => state.movie.isFetching)
    return (
        <>
            <SortingBlock selectedSort={props.selectedSort} />
            <div className={style.content}>
                <Filters countries={props.countries} genres={props.genres}
                    movieType={props.movieType} activeFilters={props.activeFilters} />  
                {props.movies ? 
                    isFetching ? <Preloader /> : <Movies movies={props.movies} />: 
                    <FiltersError/>
                }
            </div>
        </>
    )
}

export default Content