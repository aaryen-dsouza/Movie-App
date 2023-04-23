import { useState, useEffect } from "react";
import axios from "axios";

export default function MovieDetails({ movie }) {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
        params: {
          api_key: import.meta.env.VITE_MOVIE_API_KEY,
          language: "en-US",
        },
      })
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, [movie.id]);

  if (!details) return null;

  return (
    <div>
      <h3>{details.title}</h3>
      <p>{details.release_date}</p>
      <p>{details.runtime} minutes</p>
      <ul>
        {details.credits.cast.slice(0, 5).map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}
