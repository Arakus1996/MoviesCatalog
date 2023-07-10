import Movie from "./Movie";
import Paginator from '../../../components/common/paginator/Paginator'
import style from './Movies.module.css'

const Movies = (props) => {
    return ( 
        <div className={style.movies}> 
            {props.movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            <Paginator />
        </div> 
    );
}
 
export default Movies;