import React from 'react';
import MyListingsContainer from './my_listings_container';

class User extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        const user = this.props.currentUser;
        return (
            <div className='user'>
                <h2>{user.username}</h2>
                <p>{user.bio}</p>
                <MyListingsContainer />
            </div>
        )
    }
}

export default User;