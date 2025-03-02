const MoviesCard = (props) => {

    const { movie } = props

    return (
        <>

            <div key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.original_title}</p>
                <p>{movie.original_language}</p>
                <p>{movie.vote_average}</p>

            </div>

        </>
    )
}



export default MoviesCard