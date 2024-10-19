import React, { useEffect, useState } from "react";
import "../App.css";

const MovieList = ({ movies }) => {
  
  const [favorites, setFavorites] = useState(() => {
    const jsonValue = localStorage.getItem('favorites');
    if (jsonValue !== null) return JSON.parse(jsonValue);
    return [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
    window.location.reload();
    console.log(favorites);
  };

  const favoriteChecker = (id) => {
    const isFavorite = favorites.some((movie)=>movie.id === id);
    return isFavorite;
  }

  return (
    <div className="MovieList">
      {movies.map((movie) => {
        return (
          <div className="movie" key={movie.id}>
            <div className="image-container">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>

            <div className="movie-details">
              <h1 className="movie-title">{movie.title}</h1>
              <p className="movie-overview">{movie.overview}</p>
              <p className="movie-release-date">
                Release Date: {movie.release_date}
              </p>
              <p>Rating: {movie.vote_average}</p>
              <div className="button-container">
                {favoriteChecker(movie.id) ?
                  <button className="added-to-fav" onClick={console.log("..remove..")}>Added to Favorites</button>
                  :
                  <button className="add-to-fav" onClick={()=>handleFavorite(movie)}>Add to Favorites</button>
                }
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
