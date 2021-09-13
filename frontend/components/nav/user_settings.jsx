import React from 'react'
import { withRouter } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


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
    // this.props.history.push('/');
  }

  onHover(e) {
    const newState = !this.state.open
    this.setState({ open: newState })
  }

  render() {
    const signedIn = () => {
      return (
        <div
          className="user-settings-options"
          onMouseEnter={this.onHover}
          onMouseLeave={this.onHover}
        >
          <div className="user-icon"><Link to={`/users/${this.props.currentUser.id}`}><FontAwesomeIcon icon={['fas', 'user-circle']} /></Link></div>
          {this.state.open && (
            <ul className="logged-in" onClick={(e) => e.stopPropagation()}>
                <li className='menu-item'>MY ITEMS</li>
                <li className='menu-item'>
                  <button className="user-settings-button" onClick={this.onClick}>
                    LOGOUT
                  </button>
                </li>
            </ul>
          )}
        </div>
      )
    }

    const noUser = () => {
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

    return this.props.currentUser ? signedIn() : noUser()
  }
}

export default withRouter(UserSettings);
