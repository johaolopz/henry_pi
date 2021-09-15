import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from '../components/LandingPage/LP_init';
import Home from '../components/Home/Home';

function App() {
  return (
    <div className="App">
      <Route
        exact
        path='/'
        render={() => <LandingPage />}
      />
      <Route
        path='/home'
        render={() => <Home />}
      />
    </div>
  );
}

export default App;
