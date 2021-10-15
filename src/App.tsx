import React from 'react';
import "./global.css"
import SearchBar from './components/SearchBar'
import AddMovie from './components/AddMovie'
import Movie from './components/Movie';
import Title from './components/Title'

function App() {
  return (
    <div className="App">
      <Title/>
      <SearchBar/>
      <AddMovie/>
      <Movie 
        title="O Poderoso Chefão." 
        categories={['ação','aventura','comédia']} 
        favorite={true}  
      />
      <Movie 
        title="O Poderoso Chefão." 
        categories={['ação','aventura','comédia']} 
        favorite={false}  
      />
      <Movie 
        title="O Poderoso Chefão." 
        categories={['ação','aventura','comédia']} 
        favorite={true}  
      />
      <Movie 
        title="O Poderoso Chefão." 
        categories={['ação','aventura','comédia']} 
        favorite={false}  
      />
    </div>
  );
}

export default App;
