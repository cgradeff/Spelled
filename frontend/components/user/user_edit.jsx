import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EditUser extends React.Component {
  constructor(props) {
    super(props)
    this.bio = ''
    this.props.user ? (this.bio = this.props.user.bio) : (this.bio = '')
    this.state = {
      email: this.props.user.email,
      username: this.props.user.username,
      bio: this.bio,
      user: this.props.user,
    }
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user.id)
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  handleLogout(e) {
    e.preventDefault()
    this.props.logout()
    this.props.history.push('/')
  }

  handleSubmit(e) {
    e.preventDefault()
    let user = {
      email: this.state.email,
      username: this.state.username,
      bio: this.state.bio,
      id: this.props.currentUserId,
    }
    this.props.editUser(user)
    this.setState({
      user: user,
    })
  }

  render() {
    const user = this.state.user

    return (
      <div className="user">
        <div className="user-top">
          <div className="user-info">
            <div>
              <FontAwesomeIcon
              icon={['fas', 'user-circle']}
              className="user-pic"
            />
            </div>
            <div>
              <h2>{user.username}</h2>
            </div>
            <div className="user-list-count">
                  <h3>{user.listings.length}</h3>
                  <p id='user-list-p'>Listings</p>
            </div>
          </div>
          <p>{user.bio}</p>
        </div>
        <div className="user-content-container">
          <ul className="user-options">
            <Link
              className="user-options-li"
              to={`/users/${this.props.currentUserId}`}
            >
              <li>MY ITEMS</li>
            </Link>
            <Link
              className="user-options-li"
              to={`/users/${this.props.currentUserId}/settings`}
            >
              <li>SETTINGS</li>
            </Link>
          </ul>
          <div className="edit-user">
            <div className="edit-user-div">
              <div className="edit-user-head">
                <h1>Edit Your Info</h1>
              </div>

              <form>
                <div className="top-row">
                  <div>
                    <p>Username</p>
                    <input
                      type="text"
                      value={this.state.username}
                      onChange={this.update('username')}
                    />
                  </div>
                  <div className="edit-email">
                    <p>Email</p>
                    <input
                      type="text"
                      value={this.state.email}
                      onChange={this.update('email')}
                    />
                  </div>
                </div>
                <div>
                  <p>Bio</p>
                  <textarea
                    type="text"
                    value={this.state.bio}
                    onChange={this.update('bio')}
                  />
                </div>
                <div className="edit-submit">
                  <button
                    type="submit"
                    value="Submit"
                    onClick={this.handleSubmit}
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
              <div className="edit-signout">
                <button id='edit-submit-button' onClick={this.handleLogout}>
                  SIGN OUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditUser
