import { connect } from 'react-redux';
import { requestListing,  deleteListing} from '../../actions/listing_actions';
import { fetchUser } from '../../util/user_api_util';
import { fetchComments } from "../../actions/comment_actions";

import ListingShow from './listing_show';

const mSTP = (state, ownProps) => {
    return {
        listing: state.entities.listings[ownProps.match.params.listingId],
        currentUser: state.entities.users[state.session.id],
    }
}

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    requestListing: (id) => dispatch(requestListing(id)), 
    deleteListing: listingId => dispatch(deleteListing(listingId)),
    fetchComments: (listId) => dispatch(fetchComments(listId)),
})

export default connect(mSTP, mDTP)(ListingShow)