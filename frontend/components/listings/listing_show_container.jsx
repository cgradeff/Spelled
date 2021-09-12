import { connect } from 'react-redux';
import { requestListing } from '../../actions/listing_actions';


import ListingShow from './listing_show';

const mSTP = (state, ownProps) => {
    return {
        listing: state.entities.listings[ownProps.match.params.listingId],
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => ({
    requestListing: (id) => dispatch(requestListing(id)), 
})

export default connect(mSTP, mDTP)(ListingShow)