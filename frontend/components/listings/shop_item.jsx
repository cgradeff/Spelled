import React from 'react';
import { Link } from 'react-router-dom';

const ShopItem = ({listing, deleteListing}) => {
    return (
        <li className='shop-item'>
            <Link to={`/listings/${listing.id}`}>{listing.description}</Link>
            <Link to={`/listings/${listing.id}/edit`}>Edit</Link>
            <button onClick={() => deleteListing(listing.id)}>Delete Listing</button>
        </li>
    )
}

export default ShopItem;