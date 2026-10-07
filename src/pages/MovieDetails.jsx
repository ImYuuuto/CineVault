import { useParams } from "react-router-dom";
import { movies } from "../data/movies";
import GenreBadge from "../components/GenreBadge";
import Rating from "../components/Rating";
import useWatchlistStore from "../store/watchListStore";

const MovieDetails = () => {
  const { id } = useParams();

  const toggle = useWatchlistStore((state) => state.toggleWatchList);
  const watchlist = useWatchlistStore((state) => state.watchlistList);

  const currentMovie = movies.find((movie) => movie.id === Number(id));

  if (!currentMovie) {
    return <p>Movie not found</p>;
  }

  const isInWatchlist = watchlist.includes(currentMovie.id);

  function handleWatchlist() {
    toggle(currentMovie.id);
  }

  return (
    <main className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[300px_1fr]">
      <div>
        <img
          src={currentMovie.poster}
          alt={`${currentMovie.title}-poster`}
          className="w-full rounded object-cover"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold">{currentMovie.title}</h1>

        <div className="mt-3 flex items-center gap-3">
          <GenreBadge genre={currentMovie.genre} />
          <span>•</span>
          <Rating rating={currentMovie.rating} />
        </div>

        <div className="mt-4 flex gap-3 text-sm text-gray-600">
          <span>Year: {currentMovie.year}</span>
          <span>•</span>
          <span>Duration: {currentMovie.duration}</span>
        </div>

        <p className="mt-6 leading-7 text-gray-500">
          {currentMovie.description}
        </p>

        <h2 className="mt-6 text-sm font-bold text-stone-600">
          Director: {currentMovie.director}
        </h2>

        <button
          onClick={handleWatchlist}
          className="cursor-pointer rounded-xl border border-gray-500 bg-black px-4 py-2.5 text-white hover:bg-gray-950"
        >
          {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
        </button>
      </div>
    </main>
  );
};

export default MovieDetails;
