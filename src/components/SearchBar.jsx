import React, { useState } from "react";
import MovieList from "./MovieList";
import "../App.css";
import DefaultMovieList from "./DefaultMovieList";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  async function searchMovie(query) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=f43ec82a5f24fe6190891894b7436c7a&query=${query}`
      );

      if (response.ok) {
        const data = await response.json();
        setMovies(data.results);
        setError("");
      } else {
        setError("An error occurred while fetching movies.");
        setMovies([]);
      }
    } catch (error) {
      setError("An error occurred while fetching movies.");
      setMovies([]);
    }
  }

  function handleSearch(e) {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() !== "") {
      searchMovie(query);
    } else {
      setMovies([]);
      setError("");
    }
  }

  return (
    <div>
      <form action="" className="search-bar">
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          value={searchQuery}
          className="search-input"
        />
      </form>
      {error && <p>{error}</p>}

      {searchQuery ? <MovieList movies={movies} /> : <DefaultMovieList />}
    </div>
  );
};

export default SearchBar;
