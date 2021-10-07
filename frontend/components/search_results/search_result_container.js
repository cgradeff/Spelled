import { connect } from 'react-redux';
import { requestListings, deleteListing } from '../../actions/listing_actions';
import SearchResult from './search_result';
import { withRouter } from 'react-router-dom'

const mSTP = (state, ownProps) => {
    return {
        listings: Object.values(state.entities.listings),
        search: ownProps.match.params.search,
    }
}

const mDTP = dispatch => {
    return {
        requestListings: () => dispatch(requestListings()), 
    }
}

export default withRouter(connect(mSTP, mDTP)(SearchResult));