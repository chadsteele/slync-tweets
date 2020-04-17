import React, { useState } from 'react';
import './App.css';
import Container from "@material-ui/core/Container"
import SearchBox from './SearchBox'
import Cards from './Cards'
import config from './config'
import Api from './Api'

function App() {

  const [data, setData] = useState(config.data);

  Api.fetch().then((data) => {
    const items = data.map(item => {
      return { id_str: item.id_str }
    });
    setData(config.data);
  });

  return (
    <div className="App">
      <Container>
        <SearchBox />
        <Cards items={data} />
      </Container>
    </div>
  );
}

export default App;
