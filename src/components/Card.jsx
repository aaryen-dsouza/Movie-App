export default function Card({ info }) {
  // console.log(info);
  return (
    <>
      <div className='movie'>
        <a
          href={`https://www.themoviedb.org/movie/${info.id}`}
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`}
            className='poster'
            alt='No Poster available'
          />
        </a>

        <div className='movie-details'>
          <div className='box'>
            <h4 className='title'>{info.title}</h4>
            <p className='rating'>{info.vote_average.toFixed(1)}</p>
          </div>
          <div className='overview'>
            <h1>Overview</h1>
            {info.overview}
          </div>
        </div>
      </div>
    </>
  );
}
