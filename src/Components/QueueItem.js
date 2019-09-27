import React from 'react';
import '../Styling/QueueItem.scss';
import { Draggable } from 'react-beautiful-dnd';

const QueueItem = (props) => {
  let { movie, deleteFromQueue, index } = props

    // id: movie["id"],
    // title: movie["title"],
    // overview: movie["overview"],
    // img: imgUrl,
    // genres: movieGenres,
    // popularity: movie["popularity"],
    // vote_average: movie["vote_average"],
    // release_date: movie["release_date"]

  return (
    <Draggable draggableId={movie.title} index={index}>
      {provided => (
        <div className="queue-item" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <div className="img-box">
            <img className={`movie-img-${movie.id}`} src={movie.img} alt="poster"/>
          </div>
          <div className="movie-info">
            <button>More</button>
            <button onClick={() => deleteFromQueue(movie)}>Delete</button>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default QueueItem;
