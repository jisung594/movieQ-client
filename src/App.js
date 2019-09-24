import React, { Component } from 'react';
import MovieList from './Components/MovieList';
import MovieQueue from './Components/MovieQueue';
import './Styling/App.scss';

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


  addtoQueue = async (movie) => {
    const response = await fetch(`/users/${this.state.user.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ queue: [movie.id] }),
      // body: this.state.user.queue.length ? JSON.stringify({ queue: [...this.state.user.queue, movie.id] }) : JSON.stringify({ queue: [movie.id] }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    })

    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body
  }

  // { console.log(this.state.movies ? this.state.movies : null) }
  // { console.log(this.state.user ? this.state.user : null) }

  render() {
    return (
      <div className="App">
        <div className="row-1">
          <h2>{this.state.user.first_name ? this.state.user.first_name : "wait"}'s Queue</h2>
          <MovieQueue />
        </div>
        <div className="row-2">
          <h2>MovieQ Database</h2>
          <MovieList movies={this.state.movies} addtoQueue={this.addtoQueue}/>
        </div>
      </div>
    );
  }
}

export default App;
