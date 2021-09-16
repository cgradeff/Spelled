import React from 'react';
import ShopItem from './shop_item';
import { Link } from 'react-router-dom';
 
class Shop extends React.Component {
    componentDidMount() {
        this.props.requestListings();
    }

    render() {
        const {listings, deleteListing} = this.props;
        
        return (
            <div className='shop'>
                <h2 className='shop-title'>Available Listings</h2>
                <ul className='shop-list'>
                    {listings.map(listing => (
                        <ShopItem listing={listing} deleteListing={deleteListing} key={listing.id}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Shop;