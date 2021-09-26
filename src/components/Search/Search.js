import React from 'react';
import Hero from '../Hero/Hero'
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const location = {pathname: "/movies/", state: movie.id}
    return (
        <div className="col-lg-3 col-md-4 my-4">
            <div className="card">
            <img src={posterUrl} class="card-img-top" onError={(event) => event.target.src = '/no-image.jpg'} alt={movie.original_title} />
            <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <Link to={location} className="btn btn-primary">Details</Link>
            </div>
        </div>
        </div>
  )
}

const Search = ({keyword, searchResults}) => {
    const title = `You searched for ${keyword}`
    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })

    return(
        <>
            <Hero text={title} />
            {resultsHtml && 
            <div className="container">
                <div className="row">
                    {resultsHtml}
                </div>
            </div>
            }
        </>
    );
}
export default Search;