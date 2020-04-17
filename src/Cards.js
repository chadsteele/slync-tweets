import React, { useState, useEffect } from 'react';
import { Masonry } from 'masonic'  //https://www.npmjs.com/package/masonic
import Card from './Card'
import config from './config'


const Cards = props => {
    // const [width, setWidth] = useState(window.innerWidth);

    // const onResize = () => {
    //     setWidth(window.innerWidth);
    // };

    // useEffect(() => {
    //     window.addEventListener("resize", onResize);
    //     return () => window.removeEventListener("resize", onResize);
    // });

    const items = props.items || config.items;

    return <div className="Cards">
        <Masonry id="Cards" columnWidth={300} columnGutter={10} items={items} render={Card} />
    </div>

}

export default Cards;