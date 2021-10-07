import { connect } from 'react-redux';
import { requestListings, deleteListing } from '../../actions/listing_actions';
import CatPage from './cat_page';
import { withRouter } from 'react-router-dom'

const mSTP = (state, ownProps) => {
    // console.log(ownProps.match.params)
    return {
        listings: Object.values(state.entities.listings),
        title: ownProps.match.params.title,
        item: ownProps.match.params.item
    }
}

const mDTP = dispatch => {
    return {
        requestListings: () => dispatch(requestListings()), 
        deleteListing: listingId => dispatch(deleteListing(listingId))
    }
}

export default withRouter(connect(mSTP, mDTP)(CatPage));