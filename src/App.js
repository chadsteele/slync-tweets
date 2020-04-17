import React, { useState, useEffect } from 'react';
import './App.css';
import Container from "@material-ui/core/Container"
import SearchBox from './SearchBox'
import Cards from './Cards'
import Api from './Api'

function App() {

  const [items, setItems] = useState(false);

  //search for tweets
  const search = (q, count) => {
    setItems(false);
    Api.fetch(q, count).then((data) => {
      const items = data.map(item => {
        return { id_str: item.id_str };
      });
      setItems(items);
    });
  }

  //init with random public tweets
  useEffect(() => {
    search();
  }, []);

  return (
    <div className="App">
      <Container>
        <SearchBox search={search} />
        {items ? <Cards items={items} /> : "Loading..."}
      </Container>
    </div>
  );
}

export default App;
