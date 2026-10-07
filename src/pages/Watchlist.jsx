import { movies } from "../data/movies";
import MovieGrid from "../components/MovieGrid";
import useWatchlistStore from "../store/watchListStore";

const Watchlist = () => {
  const watchlist = useWatchlistStore(
    (state) => state.watchlistList
  );

  const watchlistMovies = movies.filter((movie) =>
    watchlist.includes(movie.id)
  );

  return (
    <main>
      <MovieGrid movies={watchlistMovies} />
    </main>
  );
};

export default Watchlist;