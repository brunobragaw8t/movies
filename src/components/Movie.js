export const Movie = ({ movie }) => {
  return (
    <div className="movies-item text-center">
      <div className="image">
        {movie.Poster !== 'N/A' ? (
          <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
        ) : (
          <img src="img/default.jpg" alt={movie.Title} className="img-fluid" />
        )}
      </div>

      <h6 className="mt-2">{movie.Title}</h6>

      <small>{movie.Year}</small>
    </div>
  )
}
