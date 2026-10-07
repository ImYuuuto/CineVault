import { create } from "zustand";
import { movies } from "../data/movies";

const useMovieStore = create((set) => ({
  moviesList: movies,

  addMovie: (newMovie) =>
    set((state) => ({ moviesList: [...state.moviesList, newMovie] })),
  
}));

export default useMovieStore;
