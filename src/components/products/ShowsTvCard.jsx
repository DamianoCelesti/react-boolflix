import React from "react";
import ReactCountryFlag from "react-country-flag";
import "./Card.css";

const ShowsTvCard = (props) => {

    const { show } = props

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

            <div key={show.id} className="card">
                <img src={`https://image.tmdb.org/t/p/w342${show.poster_path}`} alt="poster" />
                <div className="overlay">
                    <h3>{show.name}</h3>
                    <p>{show.original_name}</p>
                    <ReactCountryFlag
                        countryCode={bandiere(show.original_language)}
                        svg
                        title={show.original_language}
                    />
                    <p>{voti(show.vote_average)}</p>
                    <p>{show.overview}</p>
                </div>

            </div>

        </>
    )
}



export default ShowsTvCard
