import { connect } from 'react-redux';
import User from './user';
import { requestListings } from '../../actions/listing_actions';
import { fetchUser } from '../../actions/user_actions';

const mSTP = (state) => {
    // console.log(state.entities.users)
    return {
        currentUser: state.entities.users[state.session.id],
        user: Object.values(state.entities.users)[0],
    }
  };

const mDTP = (dispatch) => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        requestListings: () => dispatch(requestListings())
    }
}

export default connect(mSTP, mDTP)(User);