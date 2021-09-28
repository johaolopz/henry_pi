import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from '../components/LandingPage/LP_init';
import Home from '../components/Home/Home';
import { useSelector } from 'react-redux';

function App() {
  const error = useSelector(state => state.error);
  return (
    <div className="App">
      <Route
        exact
        path='/'
        render={() => <LandingPage />}
      />
      <Route
        path='/pokemon'
        render={() => (error) ? <div className='divError'><div className='divAlert'>
          <h1>{error}</h1></div></div> : <Home />}
      />
    </div>
  );
}

export default App;
