import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexContainer from '../comments/comment_index_container';

class ListingShow extends React.Component {
  constructor(props) {
    super(props)
    
    this.onClick = this.onClick.bind(this);
    this.navToShow = this.navToShow.bind(this);
  }

  componentDidMount() {
    this.props.requestListing(this.props.match.params.listingId)
    this.props.fetchComments(this.props.match.params.listingId)
  }

  navToShow() {
    const url = `/users/${this.props.listing.author_id}/:listings`
    this.props.history.push(url);
  }

  onClick(e) {
    e.preventDefault();
    this.props.deleteListing(this.props.listing.id)
    .then(this.props.fetchUser(this.props.currentUser.id))
    .then(this.navToShow());
  }

  render() {
    const { listing } = this.props

    if (listing == undefined || listing.names == undefined)  {
      return null
    }
  
    return (
      <div className="listing-show">
        <img className="show-page-image" src={listing.photoUrl} alt="" />
        

        <div className="listing-show-text">
          <h1 className="listing-show-title">{this.props.listing.title}</h1>
          <br />

          <div className='listing-show-list'>
            <div>Types:</div>
              {listing.names.map (val => 
                <div key={val.name}>
                  {val.name}
                </div>)
              }
          </div>
          <br />

          <div className='listing-show-list'>
            <div>Colors:</div> 
              {listing.colors.map (val => 
                <div key={val.color}>
                  {val.color}
                </div>)
              }
          </div>
          <br />

          <div className="listing-show-rarity">Rarity: {this.props.listing.rarity}</div>
          <br />
          <div className="listing-show-mana">Mana Cost: {this.props.listing.mana}</div>
          <br />
          <div className="listing-show-condition">Condition: {this.props.listing.condition}</div>
          <br />

          <div className='listing-show-price'>
            <p>$</p>
            <p>{this.props.listing.price}</p>
          </div>
          <br />

          
            {this.props.currentUser == undefined ||
            this.props.currentUser.id != this.props.listing.author_id ? (
              <div className="list-show-buttons">
                <br />
                <button id='purchase'>Purchase</button>
                <br />
                <button>Offer</button>
                <br />
                <button>Message</button>
              </div>
            ) : (
              <div className="list-show-buttons">
                <div className="link-button">
                  <Link to={`/listings/${listing.id}/edit`} className="edit">Edit</Link>
                </div>
                <br />
                  <button onClick={this.onClick}> 
                  Delete
                </button>
              </div>
            )}
          

          <div className="listing-show-description">
            <h4>Description</h4>
            <div>{this.props.listing.body}</div>
          </div>
        </div>
        <CommentIndexContainer className='comment-container' listId={listing.id}/>
      </div>
    )
  }
}

export default ListingShow
