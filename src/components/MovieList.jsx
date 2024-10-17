import MovieCard from "./movieCard";
import { Link } from "react-router-dom";


const MovieList = ({movies}) => {
  return (
        <div className="movie-list">
            {movies.map((movie) => (
                <div key={movie.id}>
                    <MovieCard movie={movie} />
                    <Link to={`/movie/${movie.id}`}>See Details</Link>
                </div>
            ))}
        </div>
  )
};

export default MovieList;
