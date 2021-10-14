import React from 'react'
import MyListingsContainer from './my_listings_container'
import EditUserContainer from './user_edit_container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: (this.props.page === 'settings' ? true : false)
    }
    this.handleMyItems = this.handleMyItems.bind(this)
    this.handleSettings = this.handleSettings.bind(this)
    this.props.fetchUser(this.props.user.id)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      this.setState({
        edit: !this.state.edit
      })
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user.id)
  }

  handleSettings(e) {
    e.preventDefault()
    this.setState({
      edit: true
    })
  }

  handleMyItems(e) {
    e.preventDefault()
    this.setState({
      edit: false
    })
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
              <li><button className="user-options-li" onClick={this.handleMyItems}>MY ITEMS</button></li>
              <li><button className="user-options-li" onClick={this.handleSettings}>SETTINGS</button></li>
          </ul>
          {!this.state.edit ? <MyListingsContainer /> : <EditUserContainer />}
        </div>
      </div>
    )
  }
}

export default User
