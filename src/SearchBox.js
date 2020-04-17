import React from 'react';

import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import config from './config'

var q, timer;

function SearchBox(props) {

    return <>
        <TextField
            className="SearchBox"
            label="Search"
            placeholder="@userName and search terms "
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

            //search on Enter, not on every keystroke
            onKeyDown={e => {
                window.clearInterval(timer);

                if (e.keyCode === 13 && props.search) {
                    q = e.target.value;
                    props.search(q);
                    window.setInterval(() => {
                        props.search(q);
                    }, config.refresh || 60000)
                }
            }}
        />
    </>

}

export default SearchBox;