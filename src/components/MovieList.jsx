import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MovieList({ title, movies }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 my-8">
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative group">
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id} className="px-2">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  className="w-full h-auto rounded-lg transform transition-transform duration-300 hover:scale-110"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="text-white text-center p-4">
                    <h3 className="font-bold text-sm mb-2">{movie.title}</h3>
                    <p className="text-xs">
                      {movie.vote_average.toFixed(1)} ⭐
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default MovieList;
