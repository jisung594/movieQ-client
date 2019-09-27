import React, { useState } from 'react';
import '../Styling/ListItem.scss';

const ListItem = (props) => {
  let { movie, addToQueue } = props
  // let [ hovered, setHoverState ] = useState(false);

  // let movieImg = document.querySelector(`.movie-img-${movie.id}`)


  // const showTitle = () => {
  //   console.log(hovered);
  //   setHoverState(hovered => !hovered)
  //
  //   if (hovered && movieImg) {
  //     // movieImg.classList.add('hoveredOver')
  //     movieImg.style.opacity = "0.2"
  //   }
  //
  //   if (!hovered && movieImg) {
  //     movieImg.style.opacity = "1"
  //   }
  // }

        // id: movie["id"],
        // title: movie["title"],
        // overview: movie["overview"],
        // img: imgUrl,
        // genres: movieGenres,
        // popularity: movie["popularity"],
        // vote_average: movie["vote_average"],
        // release_date: movie["release_date"]

  return (
    <div className="list-item">
      <div className="img-box">
        <img className={`movie-img-${movie.id}`} src={movie.img} alt="poster"/>
      </div>
      <div className="movie-info">
        <h5>{movie.title}</h5>
        <button>More</button>
        <button onClick={() => addToQueue(movie)}>Save</button>
      </div>
    </div>
  )
}

export default ListItem;
