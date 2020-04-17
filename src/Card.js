import React from 'react';

const Card = ({ index, data, width }) => {
    return <>
        <blockquote class="twitter-tweet">
            <a href={`https://twitter.com/${data.screen_name}/status/${data.id_str}`}></a>
        </blockquote>
    </>
}

export default Card;