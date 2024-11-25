import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieList from "./components/MovieList";
import SearchResults from "./components/SearchResults";
import Loading from "./components/Loading";
import { fetchMovies, searchMovies } from "./services/api";

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies();
        setTrendingMovies(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading movies:", error);
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      setLoading(true);
      try {
        const results = await searchMovies(query);
        setSearchResults(results);
      } catch (error) {
        console.error("Error searching movies:", error);
      }
      setLoading(false);
    } else {
      setSearchResults([]);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-black min-h-screen">
      <Navbar onSearch={handleSearch} />
      <div className="pt-16">
        {" "}
        {/* Add padding to prevent content from hiding under navbar */}
        {searchQuery ? (
          <SearchResults results={searchResults} />
        ) : (
          <>
            {trendingMovies.length > 0 && <Hero movie={trendingMovies[0]} />}
            <div className="pb-20">
              {" "}
              {/* Add padding at bottom for better spacing */}
              <MovieList title="Trending Now" movies={trendingMovies} />
              <MovieList
                title="Popular Movies"
                movies={trendingMovies.slice(5, 15)}
              />
              <MovieList
                title="New Releases"
                movies={trendingMovies.slice(10)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
