import React, { useState } from "react";
import MovieCard from "./MovieCard";

const SearchMovie = () => {
  // states - input query, movies

  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);

  const searchMovies = async e => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5a32e65cabb27d85d8dcc33c6fb4c374&language=en-US&query=${query}&page=1&include_adult=false`;
    //try to get data from api
    try {
      const res = await fetch(url);
      const data = await res.json();
      // set data to movies array
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="I.E. Star Wars"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter(movie => movie.poster_path)
          .map(movie => (
            <MovieCard movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default SearchMovie;
