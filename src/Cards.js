import React from 'react';
import { Masonry } from 'masonic'  //https://www.npmjs.com/package/masonic
import Card from './Card'
import config from './config'


const Cards = props => {
    const items = props.items || config.items;

    return <div className="Cards">
        <Masonry id="Cards" columnWidth={300} columnGutter={10} items={items} render={Card} />
    </div>

}

export default Cards;