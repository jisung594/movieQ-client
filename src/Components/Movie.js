import React from 'react';
import '../Styling/Movie.scss';

const Movie = (props) => {
  let { movie, addtoQueue } = props

        // id: movie["id"],
        // title: movie["title"],
        // overview: movie["overview"],
        // img: imgUrl,
        // genres: movieGenres,
        // popularity: movie["popularity"],
        // vote_average: movie["vote_average"],
        // release_date: movie["release_date"]

  return (
    <div className="movie-thumb">
      <div className="img-box">
        <img src={movie.img} alt="poster"/>
      </div>
      <div className="movie-info">
        <h5>{movie.title}</h5>
        <button>More</button>
        <button onClick={(movie) => addtoQueue(movie)}>Save</button>
      </div>
    </div>
  )
}

export default Movie;
