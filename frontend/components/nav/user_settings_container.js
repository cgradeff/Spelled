import { connect } from 'react-redux';
import UserSettings from './user_settings';
import {logout} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';
import {withRouter} from 'react-router';



const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})


const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    logout: () => {
        dispatch(logout())
    }
})

export default withRouter(connect(mSTP, mDTP)(UserSettings));