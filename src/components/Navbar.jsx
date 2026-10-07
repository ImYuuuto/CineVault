import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (search.trim() === 0) {
      return;
    }
    navigate(`/movies/?search=${search}`);
  }
  return (
    <nav className="flex flex-col md:flex-row justify-between bg-black text-white px-6 py-4 border-b-4 border-gray-600 mb-4">
      <NavLink to="/" className="text-xl font-bold p-4">
        MyMovies
      </NavLink>
      <ul className="flex flex-col md:flex-row gap-4 md:items-center">
        <li className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700">
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700">
          <NavLink to="/watchlist">Watchlist</NavLink>
        </li>
        <li>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex gap-2 rounded-xl"
          >
            <input
              type="text"
              className="bg-gray-800 hover:bg-gray-700  rounded-xl px-3 py-2.5"
              placeholder="search"
              value={search}
              onChange={(e) => handleSearch(e)}
            />
            <button
              type="submit"
              className="border px-6 rounded-xl bg-black hover:bg-gray-700 cursor-pointer"
            >
              Search
            </button>
          </form>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
