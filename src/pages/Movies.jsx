import { NavLink, useSearchParams } from "react-router-dom";
import MovieGrid from "../components/MovieGrid";
import useMovieStore from "../store/movieStore";

const Movies = () => {
  const movies = useMovieStore((store) => store.moviesList);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  if (search) {
    const searchedMovie = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()),
    );

    return (
      <main>
        {searchedMovie.length === 0 ? (
          <div className="flex gap-5 flex-col text-center p-5">
            <h1 className="font-bold text-3xl">No Movies Found</h1>
            <div className="flex gap-3 justify-center p-5">
              <span className="text-xl">
                we werent been able to match a movies with the title:{" "}
              </span>
              <span className="font-bold text-xl"> {search}</span>
            </div>

            <NavLink
              to="/movies"
              className="border border-3 border-gray-400 p-4 bg-black text-white"
            >
              Back to Browse movies
            </NavLink>
          </div>
        ) : (
          <MovieGrid movies={searchedMovie} />
        )}
      </main>
    );
  }

  return (
    <div>
      <MovieGrid movies={movies} />
    </div>
  );
};

export default Movies;
