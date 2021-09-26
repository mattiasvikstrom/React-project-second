import React from "react";
import Hero from "../../components/Hero/Hero";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";


const MovieView = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation()
  const id = location.state
  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3255eeaf8a6e0ad9884eca1fe75a2ba7&language=en-US&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setMovieDetails(data);
          setIsLoading(false);
        }, 2000);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="is loading..." />;
    }
    if (movieDetails) {
      const posterPath = `http://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
      return (
      <>
      <Hero Hero text={movieDetails.original_title} />
      <div className="container my-5">
          <div className="row">
              <div className="col-md-3">
              <img src={posterPath} className="img-fluid shadow rounded" onError={(event) => event.target.src = '/no-image.jpg'} alt="Movieposter" />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                {movieDetails.overview}
              </div>
          </div>
      </div>
      </>
      )
    }
  }

  return renderMovieDetails();
};
export default MovieView;
