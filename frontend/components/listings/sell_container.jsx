import { connect } from 'react-redux';
import { createListing } from '../../actions/listing_actions';
import Sell from './sell';

const mSTP = state => {
    console.log(state)
    return {
        currentUser: state.entities.users[state.session.id],
        listings: Object.values(state.entities.listings),
    }
}

const mDTP = dispatch => {
    return {
        submitListing: (listing) => dispatch(createListing(listing)),
    }
}

export default connect(mSTP, mDTP)(Sell);