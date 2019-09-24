import React from 'react';
import Movie from './Movie';
import '../Styling/MovieList.scss';

const MovieList = (props) => {
  let { movies, addtoQueue } = props;

  let movieComponents
  if (movies.length) {
    movieComponents = movies.map(movieObj => {
      return <Movie key={movieObj.id} movie={movieObj} addtoQueue={addtoQueue}/>
    })
  }

  return (
    <div className="movie-list">
      {movieComponents}
    </div>
  )
}

export default MovieList;
