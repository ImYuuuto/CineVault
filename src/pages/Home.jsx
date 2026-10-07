import AddMovieForm from "../components/AddMovieForm";
import MovieGrid from "../components/MovieGrid";
import useMovieStore from "../store/movieStore";

const Home = () => {
  const movies = useMovieStore((state) => state.moviesList);
  const featuredMovies = movies.filter((movie) => movie.featured);

  return (
    <>
      <main>
        <section>
          <h2 className="font-bold text-3xl text-center mb-4 p-3 bg-gray-800 text-white">
            Featured Movies
          </h2>
          <MovieGrid movies={featuredMovies} />
        </section>
        <section>
          <h2 className="font-bold text-3xl text-center bg-gray-800 text-white p-3 mt-4">
            Add Movie{" "}
          </h2>
          <AddMovieForm/>
        </section>
      </main>
    </>
  );
};

export default Home;
