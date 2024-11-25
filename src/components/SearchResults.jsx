import React from "react";

function SearchResults({ results }) {
  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-white">
        <svg
          className="w-16 h-16 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <h2 className="text-2xl font-semibold mb-2">No movies found</h2>
        <p className="text-gray-400">Try adjusting your search terms</p>
      </div>
    );
  }

  return (
    <div className="px-4 my-8">
      <h2 className="text-white font-bold md:text-xl p-4">Search Results</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {results.map((movie) => (
          <div key={movie.id} className="relative group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                className="w-full h-auto rounded-lg transform transition-transform duration-300 group-hover:scale-110"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-white text-center p-4">
                  <h3 className="font-bold text-sm mb-2">{movie.title}</h3>
                  <p className="text-xs">{movie.vote_average.toFixed(1)} ⭐</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
