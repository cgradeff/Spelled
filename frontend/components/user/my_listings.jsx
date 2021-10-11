import React from 'react'
import ShopItem from '../listings/shop_item';

class MyListings extends React.Component {
  constructor(props) {
    super(props)
    this.props.requestListings()
  }

  componentDidMount() {
    this.props.requestListings();
  }

  postedListings() {
    let postedListings = this.props.listings.filter((listing) => {
      if (!!listing){
        if (!!listing.author_id){
          if (listing.author_id == this.props.currentUser.id) return listing;
        }
      }
    })
    return postedListings;
  }

  render() {
    const { deleteListing } = this.props;
    const listings = this.postedListings();

    return (
      <div className='my-listings'>
        <h1>My Items</h1>
        <ul className='shop-list'>
          {listings.map(listing => (
            <ShopItem listing={listing} deleteListing={deleteListing} key={listing.id}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default MyListings;
