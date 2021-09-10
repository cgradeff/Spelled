import React from 'react'
import { connect } from 'react-redux'
import SessionStart from './session_start'
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP = (state) => {
  return {}
}

const mDTP = (dispatch) => ({
  LoginButton: (
    <span>
      <button
        className="modal-bottom-button"
        onClick={(e) => {
          e.preventDefault()
          dispatch(openModal('login'))
        }}
      >
        Log in with Email
      </button>
    </span>
  ),
  SignupButton: (
    <span>
      <button
        className="modal-bottom-button"
        onClick={(e) => {
          e.preventDefault()
          dispatch(openModal('signup'))
        }}
      >
        Continue with Email
      </button>
    </span>
  ),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(SessionStart)
