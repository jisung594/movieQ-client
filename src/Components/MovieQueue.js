import React from 'react';
import Movie from './Movie';
import '../Styling/MovieQueue.scss';

const MovieQueue = (props) => {
  let { movies, user } = props

  let userQueue
  if (user.id && movies.length) {
    userQueue = user.queue.map(movieId => {
      let movie = movies.find(movieObj => {
        return movieObj.id === movieId
      })
      return <Movie key={movie.id} movie={movie} />
    })
  }

  return (
    <div className="queue-container">
      {userQueue}
    </div>
  )
}

export default MovieQueue;
