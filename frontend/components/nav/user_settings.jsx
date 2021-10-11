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
    e.preventDefault()
    const newState = !this.state.open
    this.setState({ open: newState })
  }

  render() {
    const loggedIn = () => {
      return (
        <div
          className="user-settings-loggedin user-icon"
          onMouseEnter={this.onHover}
          onMouseLeave={this.onHover}
        >
          <div id="user-icon-cont">
            <Link to={`/users/${this.props.currentUser.id}/${'listings'}`}>
              <FontAwesomeIcon icon={['fas', 'user-circle']} id="icon" />
            </Link>
          </div>
          {this.state.open && (
            <ul
              className="logged-in"
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                to={`/users/${this.props.currentUser.id}/${'listings'}`}
                className="linked"
              >
                <li className="menu-item">MY ITEMS</li>
              </Link>
              <Link
                to={`/users/${this.props.currentUser.id}/${'settings'}`}
                className="linked"
              >
                <li className="menu-item">SETTINGS</li>
              </Link>
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
