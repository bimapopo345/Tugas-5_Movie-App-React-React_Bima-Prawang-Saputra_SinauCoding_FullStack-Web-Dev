import React from "react";

function Hero({ movie }) {
  if (!movie) return null;

  return (
    <div className="w-full h-[550px] text-white relative">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {movie?.title}
          </h1>
          <div className="my-4">
            <button className="bg-red-600 text-white px-8 py-3 rounded mr-4 hover:bg-red-700 transition">
              ▶ Play
            </button>
            <button className="border border-white text-white px-8 py-3 rounded hover:bg-white hover:text-black transition">
              More Info
            </button>
          </div>
          <p className="text-gray-200 text-sm mb-2">
            Released: {new Date(movie?.release_date).toLocaleDateString()}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 leading-relaxed">
            {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
