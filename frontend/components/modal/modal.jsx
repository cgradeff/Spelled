import React from 'react'
import LoginFormContainer from '../session_form/login_form_container'
import SignupFormContainer from '../session_form/signup_form_container'
import SessionStartContainer from '../session_form/session_start_container'

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  stopProp(e) {
    e.stopPropagation()
  }

  render() {
    if (!this.props.modal) {
      return null
    }
    let component = null
    switch (this.props.modal) {
      case 'start-signup':
        component = <SessionStartContainer type="signup"/>
        break
      case 'start-login':
        component = <SessionStartContainer type='login'/>
        break
      case 'signup':
        component = <SignupFormContainer />
        break
      case 'login':
        component = <LoginFormContainer />
        break
      default:
        return null
    }

    return (
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal-child" onClick={this.stopProp}>
          {component}
        </div>
      </div>
    )
  }
}

export default Modal
