import './MovieItem.css';

function MovieItem(props) {
    return (<div>
        {
            props.movies.map((movie) => {
                // Ein Key ist ein Einzigartiger Wert, z.B eine id
                return (<div className="Card">
                    <p>{movie.title}</p>s
                    <p>{movie.year}</p>
                    <p>{movie.director}</p>
                    <p>{movie.duration}</p>
                    <p className="genre">{movie.genre}</p>
                    <p>{movie.rate}</p>
                </div>);
            })}
    </div>);
}

export default MovieItem;