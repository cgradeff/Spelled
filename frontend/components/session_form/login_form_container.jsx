import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log in',
    // navLink: <Link to="/signup">Sign Up</Link>,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
            <span><button className='modal-bottom-button' onClick={(e) => {
                e.preventDefault();
                dispatch(openModal('signup'))}
            }>Sign Up</button></span>
        ),
    closeModal: () => dispatch(closeModal()),
    loginDemoUser: () => dispatch(loginDemoUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
