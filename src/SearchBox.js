import React, { useState } from 'react';

import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Container from "@material-ui/core/Container"
import SearchHelp from "./SearchHelp"

import config from './config'

var q, timer;

function SearchBox(props) {

    const [msg, setMsg] = useState(props.msg);

    /*
    Twitter claims to support from:username, see https://developer.twitter.com/en/docs/tweets/search/guides/standard-operators
    but it's not that reliable
    */

    return <>
        <Container className="SearchBox">
            <TextField
                label="Search"
                placeholder="from:userName, @userName, #hashtags and/or other search terms"
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
                    setMsg(<SearchHelp />);

                    if (e.keyCode === 13 && props.search) {
                        const q = e.target.value || '*';
                        props.search(q, 20);
                        setMsg("");
                        timer = window.setInterval(() => {
                            props.search(q);
                        }, config.refresh || 5 * 60 * 1000);
                    }
                }}
            />
            <div>{msg}</div>
        </Container>
    </>
}

export default SearchBox;