import React from 'react';
import './App.css';
import Container from "@material-ui/core/Container"
import SearchBox from './SearchBox'
import Cards from './Cards'

function App() {
  return (
    <div className="App">
      <Container>
        <SearchBox />
        <Cards />
      </Container>
    </div>
  );
}

export default App;
