import React from 'react';
import { Link } from 'react-router-dom';

const ShopItem = ({listing}) => {
    return (
        <li className='shop-item'>
            <Link to={`/listings/${listing.id}`}>
                <h3>{listing.title}</h3>
            </Link>
            
            <p>{listing.body}</p>
            <p>$</p>
            <p>{listing.price}</p>
            <p>{listing.id}</p>
        </li>
    )
}

export default ShopItem;