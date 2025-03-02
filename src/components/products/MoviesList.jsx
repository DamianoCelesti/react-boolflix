import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import MoviesCard from "./MoviesCard";

const MoviesList = () => {


    const { movies } = useContext(GlobalContext);







    return (
        <>


            {movies.map((movie) => (
                <MoviesCard key={movie.id} movie={movie} />
            ))}
        </>
    )
}



export default MoviesList