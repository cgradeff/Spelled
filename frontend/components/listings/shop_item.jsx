import React from 'react';
import { Link } from 'react-router-dom';

const ShopItem = ({listing}) => {
    return (
        <Link to={`/listings/${listing.id}`} className='shop-item-link'><li className='shop-item'>
            <img className="show-item-image" src={listing.photoUrl} alt="" />
            <div className='shop-item-text'>
                <h3 className='shop-item-title'>{listing.title}</h3>
                <div className='price'>
                    <p>$</p>
                    <p>{listing.price}</p>
                </div>
            </div>
            
        </li></Link>
    )
}

export default ShopItem;