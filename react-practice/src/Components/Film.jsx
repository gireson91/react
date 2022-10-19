const Film = ({title, poster, director, genre, plot, rated}) => {
    return(
        <>
            <h1>{title}</h1>
            <img src={poster} />
            <table className={styles.table}>
                <tr>
                    <td>Directed by:</td>
                    <td>{director}</td>
                </tr>
                <tr>
                    <td>Genre:</td>
                    <td>{genre}</td>
                </tr>
                <tr>
                    <td>Description:</td>
                    <td>{plot}</td>
                </tr>
                <tr>
                    <td>Rating:</td>
                    <td>{rated}</td>
                </tr>
            </table>
        </>

    )
}

export default Film;
