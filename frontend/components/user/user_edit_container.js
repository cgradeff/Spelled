import { connect } from 'react-redux';
import { fetchUser, editUser } from '../../actions/user_actions';
import EditUser from './user_edit';
import { withRouter } from 'react-router';
import {logout} from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    user: Object.values(state.entities.users)[0],
    history: ownProps.history,
  }
}

const mDTP = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    editUser: user => dispatch(editUser(user)),
    logout: () => {
        dispatch(logout())
    }
  }
}

export default withRouter(connect(mSTP, mDTP)(EditUser));