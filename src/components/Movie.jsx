import Card from "./Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { createBrowserHistory } from "history";
// const history = createBrowserHistory();
let base_url = "https://api.themoviedb.org/3";
// let url =
//   base_url +
//   "/discover/movie?sort_by=popularity.desc&api_key=" +
//   import.meta.env.VITE_MOVIE_API_KEY;
let url =
  base_url +
  "/trending/movie/day?api_key=" +
  import.meta.env.VITE_MOVIE_API_KEY;

const arr = ["Popular", "Theatre", "Kids", "Drama", "Comedy"];

export default function Movie() {
  const [movieData, setMovieData] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url_set);
        const data = await response.json();
        setMovieData(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url_set]);

  const handleLogoClick = () => {
    window.location.reload();
  };

  const getData = (movieType, event) => {
    event.preventDefault();
    switch (movieType) {
      case "Popular":
        url =
          base_url +
          "/discover/movie?sort_by=popularity.desc&api_key=" +
          import.meta.env.VITE_MOVIE_API_KEY;
        // history.push("popular");
        break;
      case "Theatre":
        url =
          base_url +
          "/movie/now_playing" +
          "?api_key=" +
          import.meta.env.VITE_MOVIE_API_KEY;
        // history.push("theatre");
        break;
      case "Kids":
        url =
          base_url +
          "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=" +
          import.meta.env.VITE_MOVIE_API_KEY;
        // history.push("kids");
        break;
      case "Drama":
        url =
          base_url +
          "/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=" +
          import.meta.env.VITE_MOVIE_API_KEY;
        // history.push("drama");
        break;
      case "Comedy":
        url =
          base_url +
          "/discover/movie?with_genres=35&sort_by=popularity.desc&api_key=" +
          import.meta.env.VITE_MOVIE_API_KEY;
        // history.push("comedy");
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
        <Link to='/' onClick={handleLogoClick}>
          <h2 className='text-2xl font-black'>MOVIE.to</h2>
        </Link>
        <nav>
          <ul>
            {arr.map((item) => (
              <li key={item}>
                <a
                  href='#'
                  name={item}
                  onClick={(e) => getData(e.target.name, e)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <form onSubmit={searchMovie}>
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
            <p className='notfound'>Loading...</p>
          </>
        ) : (
          movieData.map((movie) => <Card key={movie.id} info={movie} />)
        )}
      </div>
    </>
  );
}
