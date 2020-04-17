import React from 'react';
import { Masonry } from 'masonic'  //https://www.npmjs.com/package/masonic
import Card from './Card'

//default data
const items = [
    { screen_name: 'connorfranta', id_str: '1250960715579641857' },
    { screen_name: 'PJColley', id_str: '1250558928561352704' },
    { screen_name: 'WhiteHouse', id_str: '1250895001636216837' },
]

const Cards = props => (
    <Masonry columnWidth={300} columnGutter={10} items={props.items || items} render={Card} />
)



//https://www.npmjs.com/package/masonic

// let i = 0
// const items = Array.from(Array(20), () => ({ id: i++ }))

// const Cards = props => (
//     <Masonry columnGutter={10} items={items} render={MasonryCard} />
// )

// const MasonryCard = ({ index, data: { id }, width }) => (
//     <div>
//         <div>Index: {index}</div>
//         <pre>ID: {id}</pre>
//         <div>Column width: {width}</div>
//     </div>
// )

export default Cards;