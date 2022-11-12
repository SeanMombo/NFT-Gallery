import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/Searchbar';
import NftGallery from './components/NftGallery/NftGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

function App() {
  return (
    <div className="App">
      <h1>NFT Gallery</h1>
      <h4>By: Sean Mombo</h4>
      <SearchBar/>
      <ErrorMessage/>
      <NftGallery/>
    </div>
  );
}

export default App;
