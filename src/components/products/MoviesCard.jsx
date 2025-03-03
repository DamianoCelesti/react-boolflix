import React from "react";
import ReactCountryFlag from "react-country-flag";


const MoviesCard = (props) => {


    function bandiere(lingua) {
        const bandiereNazioni = {
            en: "GB",
            it: "IT",
            fr: "FR",
            us: "US",
        };

        return bandiereNazioni[lingua] || "no flag";
    }
    const { movie } = props

    return (
        <>

            <div key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.original_title}</p>
                <ReactCountryFlag
                    countryCode={bandiere(movie.original_language)}
                    svg
                    title={movie.original_language}
                />
                <p>{movie.vote_average}</p>

            </div>

        </>
    )
}



export default MoviesCard