import { NavLink } from "react-router-dom";
import GenreBadge from "./GenreBadge";
import Rating from "./Rating";

const MovieCard = ({ id, image, title, year, genre, rating }) => {
  return (
    <NavLink to={`/movies/${id}`}>
      <div className="overflow-hidden rounded-xl border border-gray-700 bg-gray-950 text-white">
        <img
          className="h-80 w-full object-cover"
          src={image}
          alt={`${title}-poster`}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="mt-2 flex gap-3 text-sm text-gray-400">
            <span>{year}</span>
            <span>•</span>
            <GenreBadge genre={genre} />
            <Rating rating={rating} />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default MovieCard;
