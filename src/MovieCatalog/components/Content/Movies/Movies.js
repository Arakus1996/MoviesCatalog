import Movie from "./Movie";
import Paginator from '../../../components/common/paginator/Paginator'

//  Надо ограничить описание фильма т.к. Карточка фильма становится больше

const Movies = (props) => {
    return ( 
        <div>
            {props.movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            <Paginator />
        </div> 
    );
}
 
export default Movies;