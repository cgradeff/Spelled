import { connect } from 'react-redux';
import { requestListings, deleteListing } from '../../actions/listing_actions';
import Shop from './shop';

const mSTP = state => {
    return {
        listings: Object.values(state.entities.listings)
    }
}

const mDTP = dispatch => {
    return {
        requestListings: () => dispatch(requestListings()), 
        deleteListing: listingId => dispatch(deleteListing(listingId))
    }
}

export default connect(mSTP, mDTP)(Shop);