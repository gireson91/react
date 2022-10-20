const Film = () => {
    return(
        <>
            <h1>{film.title}</h1>
            <img src={film.poster} />
            <table>
                <tr>
                    <td>Directed by:</td>
                    <td>{film.director}</td>
                </tr>
                <tr>
                    <td>Genre:</td>
                    <td>{film.genre}</td>
                </tr>
                <tr>
                    <td>Description:</td>
                    <td>{film.plot}</td>
                </tr>
                <tr>
                    <td>Rating:</td>
                    <td>{film.rated}</td>
                </tr>
            </table>
        </>

    )
}

export default Film;
