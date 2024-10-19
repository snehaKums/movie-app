import React from "react";
import "../App.css";

const FavouriteMovie = () => {
  
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  const removeFromFavorites = (productId) => {
    const updatedFavorites = favorites.filter(
      (favoriteProduct) => favoriteProduct.id !== productId
    );

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    window.location.reload(); 
  };


  console.log(favorites);
  return (
    <div>
      {
        favorites.length ? (
      <div className="MovieList">
        {favorites?.map((movie) => {
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
                  <p className="movie-overview">Plot : {movie.overview}</p>
                  <p className="movie-release-date">
                    Release Date: {movie.release_date}
                  </p>
                  <p className="movie-rating">Rating: {movie.vote_average}</p>
                </div>
                <div className="button-container">
                  <button className="add-to-fav" onClick={()=>removeFromFavorites(movie.id)}>Remove from Favorites</button>
                </div>
              </div>
          );
        })}
      </div>
    ) : (
        <h6 className="no-movie"> No movie added to favorites</h6>
    )
      }
    </div>
  );
};

export default FavouriteMovie;
