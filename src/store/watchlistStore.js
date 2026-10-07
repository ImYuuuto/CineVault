import { create } from "zustand";
import { movies, watchlist } from "../data/movies";

const useWatchlistStore = create((set) => ({
  watchlistList: movies.filter((movie) => watchlist.includes(movie.id)),

  toggleWatchList: (newId) =>
    set((state) => ({
      watchlistList: state.watchlistList.includes(newId)
        ? state.watchlistList.filter((id) => id !== newId)
        : [...state.watchlistList, newId],
    })),
}));

export default useWatchlistStore;
