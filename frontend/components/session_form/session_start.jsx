import React from 'react'

class SessionStart extends React.Component {
  constructor(props) {
    super(props)
  }

  stopProp(e) {
    e.stopPropagation()
  }

  render() {
    let title = ''
    let text = ''
    let button = null
    let other = null
    let word = ''

    switch (this.props.type) {
      case 'login':
        title = 'Log in'
        text = "Log in to your Spelled account to buy, sell, comment, and more."
        button = this.props.LoginButton
        other = 'signup'
        word = "Don't"
        break
      case 'signup':
        title = 'Create an Account'
        text = "By creating an account on Spelled you'll be able to buy, sell, comment, and more."
        button = this.props.SignupButton
        other = 'login'
        word = 'Already'
        break
      default:
        null
    }

    return (
      <div className="modal-background">
        <div className="modal-child" onClick={this.stopProp}>
            <div className="start-modal">
                <h3 className="form-type">{title}</h3>
                <p className="modal-bottom-text">{text}</p>
                <br />
                <div>{button}</div>
                <br />
                <div className="modal-bottom-text bottom-text">
                    <p>{word} have an account?</p>
                    {other == 'login' ? <button id='switch'
                    onClick={() => this.props.openModal('start-login')}
                    >
                    Log in
                    </button> :
                    <button id='switch'
                    onClick={() => this.props.openModal('start-signup')}
                    >
                    Sign Up
                    </button>}
                </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SessionStart
