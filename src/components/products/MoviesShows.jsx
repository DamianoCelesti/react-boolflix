import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import MoviesCard from "./MoviesCard";
import ShowsTvCard from "./ShowsTvCard";


const MoviesShows = () => {


    const { movies, showsTv } = useContext(GlobalContext);







    return (
        <>
            <h1>FILM</h1>
            <div className="container">

                {movies.map((movie) => (
                    <MoviesCard key={movie.id} movie={movie} />
                ))}
            </div>
            <h1>SERIE TV</h1>
            <div className="container">

                {showsTv.map((show) => (
                    <ShowsTvCard key={show.id} show={show} />
                ))}
            </div>
        </>
    )
}



export default MoviesShows
