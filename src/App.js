import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const API_URL = "https://imdb188.p.rapidapi.com/api/v1/";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "3882fdfbfdmshe65dc0c0d6be2fap11c671jsnb64d29e004e0",
      "x-rapidapi-host": "imdb188.p.rapidapi.com",
    },
  };
  const searchMovies = async (title) => {
    const response = await fetch(
      `${API_URL}searchIMDB?query=${title}`,
      options
    );
    const result = await response.json();
    console.log('O', result);
    setMovies(result.data);
  };

  useEffect(() => {
    searchMovies('');
  });
  return (
    <div className="app">
      <h1>Movie Magic</h1>
      <div className="search">
        <input
          placeholder="Search for movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => {searchMovies(searchTerm)}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Nothing found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
