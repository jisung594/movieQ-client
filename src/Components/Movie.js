import React from 'react';
import '../Styling/Movie.scss';

const Movie = (props) => {
  let { movie } = props

        // id: movie["id"],
        // title: movie["title"],
        // overview: movie["overview"],
        // img: imgUrl,
        // genres: movieGenres,
        // popularity: movie["popularity"],
        // vote_average: movie["vote_average"],
        // release_date: movie["release_date"]

  return (
    <div>
      <img src={movie.img} alt="poster"/>
      <h5>{movie.title}</h5>
    </div>
  )
}

export default Movie;
