import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import MoviesCard from "./MoviesCard";

const MoviesList = () => {


    const { movies } = useContext(GlobalContext);







    return (
        <div className="moviesContainer">
            {movies.map((movie) => (
                <MoviesCard key={movie.id} movie={movie} />
            ))}
        </div>

    )
}



export default MoviesList
