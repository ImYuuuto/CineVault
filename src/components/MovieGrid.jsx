import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          image={movie.poster}
          title={movie.title}
          year={movie.year}
          genre={movie.genre}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
