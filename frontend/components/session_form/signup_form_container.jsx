import { connect } from 'react-redux'
import React from 'react'
import { signup } from '../../actions/session_actions'
import SessionForm from './session_form'
import { fetchUser } from '../../actions/user_actions';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.id,
    errors: state.errors.session,
    formType: 'Create an Account',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: user => dispatch(signup(user)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    otherForm: (
          <span><button className="modal-bottom-button" onClick={(e) => {
              e.preventDefault()
              dispatch(openModal('login'))
            }
          }>Login</button></span>
    ),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
