import React from 'react'
import MyListingsContainer from './my_listings_container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

class User extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user.id)
  }

  render() {
    const user = this.props.currentUser
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
              to={`/users/${this.props.currentUser.id}`}
            >
              <li>MY ITEMS</li>
            </Link>
            <Link
              className="user-options-li"
              to={`/users/${this.props.currentUser.id}/settings`}
            >
              <li>SETTINGS</li>
            </Link>
          </ul>
          <MyListingsContainer />
        </div>
      </div>
    )
  }
}

export default User
