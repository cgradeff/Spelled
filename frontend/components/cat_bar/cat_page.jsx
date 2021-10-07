import React from 'react'
import ShopItem from '../listings/shop_item'
// import { Link } from 'react-router-dom';

class CatPage extends React.Component {
  constructor(props) {
    super(props)
    this.cat = {
      TYPES: 'types',
      RARITY: 'rarity',
      'MANA COST': 'mana',
      COLOR: 'color',
    }
  }

  componentDidMount() {
    this.props.requestListings()
  }

  render() {
    const { listings, deleteListing, title, item } = this.props
    const cat = this.cat
    const filter_listings = listings.filter((listing) => {
      if (cat[title] !== 'mana') {
        return listing[cat[title]].toUpperCase() == item
      } else {
          if (item === '7+') {
              return listing[cat[title]] >= 7
          } else {
              return listing[cat[title]] == item
          }
      }
    })
    let cat_title
    cat[title] === 'mana' ? cat_title = 'mana cost' : cat_title = cat[title]
    return (
      <div className="shop">
        <h2 className="shop-title">Available Listings</h2>
        {filter_listings.length === 0 ? (
          <div className='no-listings'>
            <h3>There are no availible listings with a {cat_title} of {item}</h3>
          </div>
          
        ) : (
          <ul className="shop-list">
            {filter_listings.map((listing, i) => (
              <ShopItem
                listing={listing}
                deleteListing={deleteListing}
                key={i}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default CatPage
