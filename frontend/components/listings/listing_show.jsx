import React from 'react';
import { Link } from 'react-router-dom';

class ListingShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestListing(this.props.match.params.listingId)
  }

  render() {
    const { listing, deleteListing } = this.props

    if (listing == undefined || listing.names == undefined) {
      return null
    }
    
    return (
      <div className="listing-show">
        <img className="show-page-image" src={listing.photoUrl} alt="" />

        <ul className='listing-show-types'>
          {listing.names.map (val => 
            <li key={val.name}>
              {val.name}
            </li>)
          }
        </ul>

        <ul className='listing-show-colors'>
          {listing.colors.map (val => 
            <li key={val.color}>
              {val.color}
            </li>)
          }
        </ul>

        <div className="listing-show-text">
          <h1 className="listing-show-title">{this.props.listing.title}</h1>
          <div className="listing-show-description">
            {this.props.listing.body}
          </div>
          <div className="listing-show-price">{this.props.listing.price}</div>
          <div className="listing-show-condition">
            {this.props.listing.condition}
          </div>
          <div className="listing-show-rarity">{this.props.listing.rarity}</div>
          <div className="listing-show-mana">{this.props.listing.mana}</div>
          <div className="listing-show-offer">{this.props.listing.offer}</div>
          <div className="listing-show-sold">{this.props.listing.sold}</div>
          <div className="listing-show-user">
            {this.props.listing.author_id}
          </div>

          <div>
            {this.props.currentUser == undefined ||
            this.props.currentUser.id != this.props.listing.author_id ? (
              <div className="list-show-buttons">
                <button>Purchase</button>
                <button>Offer</button>
                <button>Message</button>
              </div>
            ) : (
              <div className="list-show-buttons">
                <div className="link-button">
                  <Link to={`/listings/${listing.id}/edit`}>Edit</Link>
                </div>
                <Link to={`/users/${this.props.currentUser.id}`}><button onClick={() => deleteListing(listing.id)}>
                  Delete
                </button></Link>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ListingShow
