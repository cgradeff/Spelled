import React from 'react'
import ShopItem from '../listings/shop_item'

class SearchResult extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestListings()
  }

  render() {
    const { listings, search } = this.props
    const filter_listings = listings.filter((listing) => {
    //   return (Object.values(listing).some((item) => {
    //     item.toString().toLowerCase().includes(search.toString().toLowerCase())
    //   }))
        return listing.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
      <div className="shop">
        <h2 className="shop-title">Available Listings</h2>
        {filter_listings.length === 0 ? (
          <div className="no-listings">
            <h3>There are no listings for your search</h3>
          </div>
        ) : (
          <ul className="shop-list">
            {filter_listings.map((listing, i) => (
              <ShopItem listing={listing} key={i} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default SearchResult
