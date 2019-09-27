import React from 'react';
import ListItem from './ListItem';
import '../Styling/MovieList.scss';

const MovieList = (props) => {
  let { movies, addToQueue } = props;

  let movieComponents
  if (movies.length) {
    movieComponents = movies.map(movieObj => {
      return <ListItem key={movieObj.id} movie={movieObj} addToQueue={addToQueue}/>
    })
  }

  return (
    <div className="movie-list">
      {movieComponents}
    </div>
  )
}

export default MovieList;
