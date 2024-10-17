import {useParams, Link} from "react-router-dom";
import MovieCard from "./movieCard";

function MovieDetails({movies}) {
    const { id } = useParams();
    const movie = movies.find((movie) => movie.id === Number(id));

    if(!movie) {
        return <h2>Movie not found!</h2>
    }

    return (
        <div>
            <MovieCard movie={movie}/>
            <iframe width="560" src={movie.trailerLink} title="Trailer" frameBorder="0" allowFullScreen></iframe>

            <p>{movie.description}</p>

            <br /> 

            <Link to="/">Back to Home</Link>

        </div>
    )
};

export default MovieDetails;