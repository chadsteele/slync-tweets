import React from 'react';

// relies on   <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

const Card = ({ index, data, width }) => {
    if (!data?.id_str) return null;

    return <>
        <blockquote className="twitter-tweet">
            <a href={`https://twitter.com/user/status/${data.id_str}`}></a>
        </blockquote>
    </>
}

export default Card;