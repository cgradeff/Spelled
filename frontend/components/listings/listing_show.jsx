import React from 'react'
import { Link } from 'react-router-dom'
// add links to edit button

class ListingShow extends React.Component {
  constructor(props) {
    super(props)
    // this.author = this.props.fetchUser(this.props.listing.author_id)
  }

  componentDidMount() {
    this.props.requestListing(this.props.match.params.listingId)
  }

  render() {
    const { listing, deleteListing } = this.props

    if (!listing) {
      return null
    }
    return (
      <div className="listing-show">
        <img className="show-page-image" src={listing.photoUrl} alt="" />
        
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
                {/* <button>Edit</button> */}
                <div className="link-button">
                  <Link to={`/listings/${listing.id}/edit`}>Edit</Link>
                </div>
                <button onClick={() => deleteListing(listing.id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ListingShow
