import React from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions'
import { requestListings, deleteListing, requestListing } from '../../actions/listing_actions'
import MyListings from './my_listings'

const mSTP = state => {
  // console.log(state.entities.users[state.session.id].listings)
  return {
    currentUser: state.entities.users[state.session.id],
    listings: Object.values(state.entities.listings)
    // listings: state.entities.users[state.session.id].listings
  }
}

const mDTP = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    requestListings: () => dispatch(requestListings()),
    requestListing: (listingId) => dispatch(requestListing(listingId)),
    deleteListing: listingId => dispatch(deleteListing(listingId))
  }
}

export default connect(mSTP, mDTP)(MyListings)

