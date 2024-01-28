// App.js
import React from 'react';
import ImageFeed from './components/ImageFeed';
import '../index.css'
import Loader from './components/Loader';

const App = () => {
  return (
    <div className='app'>
      <h1>Infinite Image Feed</h1>
      <ImageFeed />
      <Loader/>
    </div>
  );
};

export default App;
