import React from "react";
import ReactCountryFlag from "react-country-flag";
import "./Card.css";

const MoviesCard = (props) => {

    const { movie } = props

    function bandiere(lingua) {
        const bandiereNazioni = {
            en: "GB",
            it: "IT",
            fr: "FR",
            us: "US",
        };

        return bandiereNazioni[lingua] || "no flag";
    }

    function voti(voto) {
        const votoFinale = Math.ceil(voto / 2);
        const stellePiene = "⭐".repeat(votoFinale);
        const stelleVuote = "☆".repeat(5 - votoFinale);
        // console.log(votoFinale);

        return stellePiene + stelleVuote;
    }
    return (
        <>

            <div key={movie.id} className="card">
                <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="poster" />
                <div className="overlay">
                    <h3>{movie.title}</h3>
                    <p>{movie.original_title}</p>
                    <ReactCountryFlag
                        countryCode={bandiere(movie.original_language)}
                        svg
                        title={movie.original_language}
                    />
                    <p>{voti(movie.vote_average)}</p>
                    <p>{movie.overview}</p>
                </div>

            </div>

        </>
    )
}



export default MoviesCard
