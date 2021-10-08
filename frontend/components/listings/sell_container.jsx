import { connect } from 'react-redux';
import { createListing } from '../../actions/listing_actions';
import { fetchUser } from '../../util/user_api_util';
import Sell from './sell';

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        listings: Object.values(state.entities.listings),
    }
}

const mDTP = dispatch => {
    return {
        submitListing: (listing) => dispatch(createListing(listing)),
        fetchUser: userId => dispatch(fetchUser(userId)),
    }
}

export default connect(mSTP, mDTP)(Sell);