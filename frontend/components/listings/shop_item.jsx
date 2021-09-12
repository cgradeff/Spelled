import React from 'react';
import { Link } from 'react-router-dom';

const ShopItem = ({listing, deleteListing}) => {
    return (
        <li className='shop-item'>
            <Link to={`/listings/${listing.id}`}>
                <h3>{listing.title}</h3>
            </Link>
            
            <p>{listing.body}</p>
            <p>$</p>
            <p>{listing.price}</p>
            <p>{listing.id}</p>
            {/* <Link to={`/listings/${listing.id}`}>{listing.description}</Link>
            <Link to={`/listings/${listing.id}/edit`}>Edit</Link>
            <button onClick={() => deleteListing(listing.id)}>Delete Listing</button> */}
        </li>
    )
}

export default ShopItem;