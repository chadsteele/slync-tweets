import React, { useState, useEffect } from 'react';
import './App.css';
import Container from "@material-ui/core/Container"
import SearchBox from './SearchBox'
import Cards from './Cards'
import config from './config'
import Api from './Api'

function App() {

  const [items, setItems] = useState(false);

  //init with random public tweets
  useEffect(() => {
    Api.fetch().then((data) => {
      const items = data.map(item => {
        return { id_str: item.id_str }
      });
      setItems(items);
    });
  }, []);

  return (
    <div className="App">
      <Container>
        <SearchBox />
        {items ? <Cards items={items} /> : "Loading..."}
      </Container>
    </div>
  );
}

export default App;
