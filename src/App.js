import React from 'react';
import './App.css';

import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

function App() {
  return (
    <div className="App">

      <TextField
        style={{ width: '50%' }}
        label="Enter @userName, #hashtags and search terms "
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </div>
  );
}

export default App;
