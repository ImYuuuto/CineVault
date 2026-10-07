import useMovieStore from "../store/movieStore";
import { useState } from "react";
const AddMovieForm = () => {
  const add = useMovieStore((state) => state.addMovie);
  const [formData, setFormData] = useState({
    title: "",
    year: 0,
    genre: "",
    rating: "",
    duration: "",
    director: "",
    description: "",
    poster: "",
    featured: false,
  });
  function handleTitle(e) {
    setFormData((prev) => ({ ...prev, title: e.target.value }));
  }
  function handleYear(e) {
    setFormData((prev) => ({ ...prev, year: e.target.value }));
  }
  function handleGenre(e) {
    setFormData((prev) => ({ ...prev, genre: e.target.value }));
  }
  function handleRating(e) {
    setFormData((prev) => ({ ...prev, rating: e.target.value }));
  }
  function handleDuration(e) {
    setFormData((prev) => ({ ...prev, duration: e.target.value }));
  }
  function handleDescription(e) {
    setFormData((prev) => ({ ...prev, description: e.target.value }));
  }
  function handlePoster(e) {
    setFormData((prev) => ({ ...prev, poster: e.target.value }));
  }
  function handleFeatured() {
    setFormData((prev) => ({ ...prev, featured: !prev.featured }));
  }
  function handleDirector(e) {
    setFormData((prev) => ({ ...prev, director: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.rating ||
      !formData.year ||
      !formData.description ||
      !formData.poster ||
      !formData.genre ||
      !formData.duration ||
      !formData.director
    ) {
      return;
    }
    add({
      ...formData,
      id: Date.now(),
    });
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col mt-4 mx-auto max-w-2xl space-y-6 rounded-xl border border-gray-800 bg-gray-950 text-white p-6"
    >
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-200">Title </label>
        <input
          type="text"
          placeholder="Enter the title"
          className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focusborder-gray-500 focus:outline-none"
          value={formData.title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2 ">
          <label className="text-sm font-medium text-gray-200">Year </label>
          <input
            type="number"
            placeholder="Enter the year"
            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focusborder-gray-500 focus:outline-none"
            value={formData.year}
            onChange={(e) => handleYear(e)}
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-200">Genre </label>
          <input
            type="text"
            placeholder="Enter the Genre"
            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focusborder-gray-500 focus:outline-none"
            value={formData.genre}
            onChange={(e) => handleGenre(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-200">Rating </label>
          <input
            type="text"
            placeholder="Enter the rating"
            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focusborder-gray-500 focus:outline-none"
            value={formData.rating}
            onChange={(e) => handleRating(e)}
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-200">Duration </label>
          <input
            type="text"
            placeholder="Enter the Duration"
            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focusborder-gray-500 focus:outline-none"
            value={formData.duration}
            onChange={(e) => handleDuration(e)}
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-200">Director </label>
        <input
          type="text"
          placeholder="Enter the Director"
          className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focusborder-gray-500 focus:outline-none"
          value={formData.director}
          onChange={(e) => handleDirector(e)}
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-200">
          Description{" "}
        </label>
        <textarea
          placeholder="Enter the description"
          className="min-h-32 w-full rounded-lg border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focusborder-gray-500 focus:outline-none"
          value={formData.description}
          onChange={(e) => handleDescription(e)}
        ></textarea>
      </div>
      <div>
        <label className="text-sm font-medium text-gray-200">Poster </label>
        <input
          type="text"
          placeholder="Enter the title"
          className="min-h-32 w-full rounded-lg border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focusborder-gray-500 focus:outline-none"
          value={formData.poster}
          onChange={(e) => handlePoster(e)}
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-200">Featured </label>
        <input
          type="checkbox"
          placeholder="Enter the Featured"
          onChange={handleFeatured}
          value={formData.featured}
        />
      </div>
      <button
        type="submit"
        className="rounded-lg bg-white px-5 py-2.5 font-medium text-black hoverbg-gray-200"
      >
        Add movie
      </button>
    </form>
  );
};

export default AddMovieForm;
