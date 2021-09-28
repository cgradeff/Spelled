import React from 'react'
import { withRouter } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

class UserSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.onClick = this.onClick.bind(this)
    this.onHover = this.onHover.bind(this)
  }

  onClick(e) {
    e.preventDefault()
    this.props.logout()
  }

  onHover(e) {
    this.setState({ open: true })
  }

  onLeave(e) {
    console.log('hey')
    this.setState({ open: false })
  }

  render() {
    const loggedIn = () => {
      return (
        <div
          className="user-settings-loggedin user-icon"
          onMouseEnter={this.onHover}
          onMouseLeave={this.onLeave}
        >
          <Link to={`/users/${this.props.currentUser.id}`}>
            <FontAwesomeIcon icon={['fas', 'user-circle']} id="icon" />
          </Link>
          {this.state.open && (
            <ul
              // onMouseLeave={this.onLeave}
              className="logged-in"
              onClick={(e) => e.stopPropagation()}
            >
              <Link to={`/users/${this.props.currentUser.id}`} id="linked">
                <li className="menu-item">MY ITEMS</li>
              </Link>
              <li className="menu-item">
                <button className="user-settings-button" onClick={this.onClick}>
                  LOGOUT
                </button>
              </li>
            </ul>
          )}
        </div>
      )
    }

    const signedOut = () => {
      return (
        <div>
          <div className="user-settings-options">
            <button
              className="user-settings-button"
              id="login"
              onClick={() => this.props.openModal('start-login')}
            >
              LOGIN
            </button>
            <button
              className="user-settings-button"
              id="signup"
              onClick={() => this.props.openModal('start-signup')}
            >
              SIGN UP
            </button>
          </div>
        </div>
      )
    }

    return this.props.currentUser ? loggedIn() : signedOut()
  }
}

export default withRouter(UserSettings)
