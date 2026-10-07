const GenreBadge = ({ genre }) => {
  return (
    <span className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
      {genre}
    </span>
  );
};

export default GenreBadge;
