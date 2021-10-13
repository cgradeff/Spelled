import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.id,
    errors: state.errors.session,
    formType: 'Log in',
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    otherForm: (
            <span><button className='modal-bottom-button' onClick={(e) => {
                e.preventDefault();
                dispatch(openModal('signup'))}
            }>Sign Up</button></span>
        ),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
