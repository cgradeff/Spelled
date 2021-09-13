import React from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions'
import { requestListings, deleteListing } from '../../actions/listing_actions'
import MyListings from './my_listings'

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    listings: Object.values(state.entities.listings)
  }
}

const mDTP = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    requestListings: () => dispatch(requestListings()),
    deleteListing: listingId => dispatch(deleteListing(listingId))
  }
}

export default connect(mSTP, mDTP)(MyListings)




















// import { connect } from 'react-redux';
// import { requestListings, deleteListing } from '../../actions/listing_actions';
// import MyListings from './shop';

// const mSTP = state => {
//     // console.log('ugh', state);
//     return {
//         listings: Object.values(state.entities.listings)
//     }
// }

// const mDTP = dispatch => {
//     return {
//         requestListings: () => dispatch(requestListings()), 
//         deleteListing: listingId => dispatch(deleteListing(listingId))
//     }
// }

// export default connect(mSTP, mDTP)(MyListings);