import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Router } from '@reach/router';
import MovieDescription from './Components/MovieDescription';

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <Router>
      <Home path="/" />
      <MovieDescription path="/:movieId" />
    </Router>
    </div>
  );
}

export default App;
