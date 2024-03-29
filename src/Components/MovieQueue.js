import React from 'react';
import QueueItem from './QueueItem';
import '../Styling/MovieQueue.scss';
import { Droppable } from 'react-beautiful-dnd';

const MovieQueue = (props) => {
  let { movies, user } = props

  let userQueue
  if (user.id && movies.length) {
    userQueue = user.queue.map((movieId,index) => {
      let movie = movies.find(movieObj => {
        return movieObj.id === movieId
      })
      return <QueueItem key={movie.id} movie={movie} index={movie.id}>
        <h2>WTF</h2>
        </QueueItem>
    })
  }

  return (
    <Droppable droppableId={"what"}>
      {provided => (
        <div className="queue-container" {...provided.droppableProps} ref={provided.innerRef}>
          {userQueue}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default MovieQueue;
