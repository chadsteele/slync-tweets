import React, { useState, useEffect } from 'react';
import './App.css';
import Container from "@material-ui/core/Container"
import SearchBox from './SearchBox'
import Cards from './Cards'
import Api from './Api'

function Err(props) {
  return <span className="Err">{props.children}</span>
}

function App() {

  const [items, setItems] = useState([]);
  const [msg, setMsg] = useState();

  //search for tweets
  const search = (q, count) => {
    setMsg('Loading...');
    Api.fetch(q, count).then((data) => {

      if (data && data.length === 1 && data[0].message) {
        setMsg(<Err>{data[0].message + ' code: ' + data[0].code}</Err>)
      } else {

        const items = data.map(item => {
          return { id_str: item.id_str };
        });

        setMsg(!items.length
          ? <Err>Sorry.  I couldn't find anything.  Please edit your search terms.</Err>
          : ""
        );
        setItems(items);
      }
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
        {msg}
        <Cards items={items} />
      </Container>
    </div>
  );
}

export default App;
