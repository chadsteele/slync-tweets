import React, { useEffect } from 'react';

// relies on   <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

const Card = ({ index, data, width }) => {

    let myElement = {};
    const ref = element => {
        myElement = element;
    };

    useEffect(() => {
        document.dispatchEvent(new Event('renderTweet', { detail: myElement }));  //trigger twitter widgets to refresh
    });

    if (!data?.id_str) return null;

    return <div key={data.id_str} ref={ref}>
        <blockquote className="twitter-tweet">
            <a className="dots" href={`https://twitter.com/user/status/${data.id_str}`}>...</a>
        </blockquote>

        {/* 
        some queries/users return a lot of the identical tweets, but they are in fact unique
        <div style={{ color: "gray", fontSize: "x-small", float: "right" }}>        {data.id_str}</div> 
        */}

    </div>
}

export default Card;