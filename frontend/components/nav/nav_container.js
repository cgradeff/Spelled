import { connect } from 'react-redux';
import NavHeader from './nav';
import {openModal} from '../../actions/modal_actions';
import {withRouter} from 'react-router';



const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    history: ownProps.history
})


const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
})

export default withRouter(connect(mSTP, mDTP)(NavHeader));