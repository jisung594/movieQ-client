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
        user: res[0]
      }))
      .catch(err => console.log(err))

    this.fetchMovies()
      .then(res => this.setState({
        movies: res
      }))
      .catch(err => console.log(err))
  }

  fetchUsers = async () => {
    const response = await fetch('/users')
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

  // { console.log(this.state.movies ? this.state.movies : null) }
  // { console.log(this.state.users ? this.state.users : null) }

  render() {
    return (
      <div className="App">
        <div className="row-1">
          <h2>{this.state.user.first_name}'s Queue</h2>
          <MovieQueue />
        </div>
        <div className="row-2">
          <h2>MovieQ Database</h2>
          <MovieList movies={this.state.movies}/>
        </div>
      </div>
    );
  }
}

export default App;
