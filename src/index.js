import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./searchMovies";
import Popular from './Popular';
import './index.css';
function Main(){
  return (
    <>
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies/>
        <h1 className="search">Popular Search</h1>
        <Popular/>
      </div>
    </>
  );
  
};

ReactDOM.render(<Main />, 
  document.getElementById('root'));


