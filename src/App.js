import React, { Component } from 'react';
import MovieList from './Components/MovieList';
import MovieQueue from './Components/MovieQueue';
import './Styling/App.scss';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends Component {
  state = {
    user: {},
    movies: []
  }

  componentDidMount(){
    this.fetchUsers()
      .then(res => this.setState({
        user: res
      }))
      .catch(err => console.log(err))

    this.fetchMovies()
      .then(res => this.setState({
        movies: res
      }))
      .catch(err => console.log(err))
  }


  fetchUsers = async () => {
    const response = await fetch('/users/1')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  fetchMovies = async () => {
    const response = await fetch('/api/movies')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body
  }

// *** TO-DO ***
// -- 'DELETE from queue' function in frontend AND backend
// -- dragging to UPDATE order of queue



  addToQueue = (movie) => {
    if (!this.state.user.queue.includes(movie.id)) {
      fetch(`/users/${this.state.user.id}`, {
        method: 'PUT',
        body: JSON.stringify({ queue: [...this.state.user.queue, movie.id] }),
        headers: { 'Content-Type': 'application/json' }
      })
    } else {
      window.alert(`${movie.title} is already in your queue.`)
    }
      // .then(res => res.json())
      // .then(data => this.setState({
      //   user: data.product
      // }))

    this.fetchUsers()
      .then(res => this.setState({
        user: res
      }))
      .catch(err => console.log(err))
  }

  deleteFromQueue = () => {

  }


  onDragEnd = (result) => {
    // TODO: reorder queue of movies
  }


  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>

        <div className="App">
          <div className="row-1">
            <h2>{this.state.user.first_name ? this.state.user.first_name : "wait"}'s Queue</h2>
            <MovieQueue movies={this.state.movies} user={this.state.user}/>
          </div>
          <div className="row-2">
            <h2>MovieQ Database</h2>
            <MovieList movies={this.state.movies} addToQueue={this.addToQueue}/>
          </div>
        </div>

      </DragDropContext>
    );
  }
}

export default App;
