import axios from "axios";
import { useState, useEffect } from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import styles from './MyStyling.css';
import Film from './Film';

const key = "6453b42f";

const FilmInfo = () => {
    const [error, setError] = useState("");
    const [films, setFilms] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        const getFilm = async () => {
            const res = await axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${title}`);
            setFilms(res.data.Search);
            console.log(res);
        }
        getFilm();
    }, [title]);
    return (
        <div>
            <input id="movieTitle" type="text" value={title} onChange={e => setTitle(e.target.value)} />
            {
                films.map((film) => (
                    <Film 
                    key={film.imdbID}
                    title={film.Title}
                    year={film.Year}
                    poster={film.Poster}
                    rated={film.Rated}
                    genre={film.genre}
                    plot={film.plot}
                    />
                ))
            }
            
            
            {/* <p>Directed by: {film.Director}</p>
            <p>Genre: {film.Genre}</p>
            <p>Description: {film.Plot}</p>
            <p>Rated: {film.Rated}</p>
            <p>Staring: {film.Actors}</p>
            <p>Duration: {film.Runtime}</p>
            <p>Release date: {film.Release}</p>
            <p>IMDB Rating: {film.imdbRating}</p> */}
        </div>
    )
}


export default FilmInfo;
