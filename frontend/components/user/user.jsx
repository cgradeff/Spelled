import React from 'react';
import MyListingsContainer from './my_listings_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class User extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        const user = this.props.currentUser;
        return (
            <div className='user'>
                <div className='user-top'>
                    <div className='user-info'>
                        <FontAwesomeIcon icon={['fas', 'user-circle']} className='user-pic'/>
                        <h2>{user.username}</h2>
                    </div>
                    <p>{user.bio}</p>
                </div>
                
                
                <MyListingsContainer />
            </div>
        )
    }
}

export default User;