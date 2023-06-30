import Movie from "./Movie";
import Paginator from '../../../components/common/paginator/Paginator'

const Movies = (props) => {
    return ( 
        <div>
            {props.movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            <Paginator />
        </div> 
    );
}
 
export default Movies;