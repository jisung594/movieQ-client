import React from 'react';
import Movie from './Movie';
import '../Styling/MovieList.scss';

const MovieList = (props) => {
  let { movies } = props;

  let movieComponents
  if (movies.length) {
    movieComponents = movies.map(movieObj => {
      return <Movie key={movieObj.id} movie={movieObj}/>
    })
  }

  return (
    <div>
      {movieComponents}
    </div>
  )
}

export default MovieList;
