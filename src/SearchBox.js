import React from 'react';

import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

function SearchBox(props) {
    return <>
        <TextField
            className="SearchBox"
            label="Search"
            placeholder="@userName, #hashtags and search terms "
            fullWidth
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
    </>

}

export default SearchBox;