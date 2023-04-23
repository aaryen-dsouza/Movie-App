import axios from "axios";
import { useState, useEffect } from "react";
import MovieDetails from "./MovieDetails";

function MovieApp() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  function handleSelect(movie) {
    setSelectedMovie(movie);
  }

  function handleDeselect() {
    setSelectedMovie(null);
  }

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: import.meta.env.VITE_MOVIE_API_KEY,
          language: "en-US",
          page: 1,
        },
      })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Movie App</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            width={200}
            height={300}
            className='img'
            alt=''
          />
          <h2>{movie.title}</h2>
          <p>Rating: {movie.vote_average}</p>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieApp;
