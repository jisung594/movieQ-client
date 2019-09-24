import React, { Component } from 'react';
import './Styling/App.scss';

class App extends Component {
  state = {
    users: [],
    movies: []
  }

  componentDidMount(){
    this.fetchUsers()
      .then(res => this.setState({
        users: res
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

  // { console.log(this.state.users ? this.state.users : null) }
  // { console.log(this.state.movies ? this.state.movies : null) }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
