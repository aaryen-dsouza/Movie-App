import Card from "./Card";
import { useEffect, useState } from "react";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
let base_url = "https://api.themoviedb.org/3";
let url =
  base_url +
  "/discover/movie?sort_by=popularity.desc&api_key=" +
  import.meta.env.VITE_MOVIE_API_KEY;

const arr = ["Popular", "Theatre", "Kids", "Drama", "Comedy"];

export default function MainMovie() {
  const [movieData, setMovieData] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovieData(data.results);
      });
  }, [url_set]);

  const getData = (movieType) => {
    switch (movieType) {
      case "Popular":
        url =
          base_url +
          "/discover/movie?sort_by=popularity.desc&api_key=" +
          import.meta.env.VITE_MOVIE_API_KEY;
        history.push("popular");
        break;
      case "Theatre":
        url =
          base_url +
          "/movie/now_playing" +
          "?api_key=" +
          import.meta.env.VITE_MOVIE_API_KEY;
        history.push("theatre");
        break;
      case "Kids":
        url =
          base_url +
          "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=" +
          import.meta.env.VITE_MOVIE_API_KEY;
        history.push("kids");
        break;
      case "Drama":
        url =
          base_url +
          "/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=" +
          import.meta.env.VITE_MOVIE_API_KEY;
        history.push("drama");
        break;
      case "Comedy":
        url =
          base_url +
          "/discover/movie?with_genres=35&sort_by=popularity.desc&api_key=" +
          import.meta.env.VITE_MOVIE_API_KEY;
        history.push("comedy");
        break;
    }
    setUrl(url);
  };

  const searchMovie = (e) => {
    e.preventDefault();
    if (e.key == "Enter") {
      //   console.log("Hellp");
      url =
        base_url +
        "/search/movie?8&sort_by=popularity.desc&api_key=" +
        import.meta.env.VITE_MOVIE_API_KEY +
        "&query=" +
        search;
      setUrl(url);
      setSearch("");
    }
  };
  return (
    <>
      <div className='header'>
        <h2>Movie App</h2>
        <nav>
          <ul>
            {arr.map((item) => (
              <li key={item}>
                <a name={item} onClick={(e) => getData(e.target.name)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <form>
          <div className='search-btn'>
            <input
              type='text'
              placeholder='Enter Movie Name'
              className='inputText'
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onKeyUp={searchMovie}
            />
            <button>
              <i className='fas fa-search' />
            </button>
          </div>
        </form>
      </div>
      <div className='container'>
        {movieData.length === 0 ? (
          <>
            <p className='notfound'>
              No Data Found... Search for something else
            </p>
          </>
        ) : (
          movieData.map((movie) => <Card key={movie.id} info={movie} />)
        )}
      </div>
    </>
  );
}
