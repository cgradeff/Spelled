import React from 'react';


class User extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        const user = this.props.currentUser;
        return (
            <div className='user'>
                <h1>hellooooooo</h1>
                <h2>{user.username}</h2>
                <p>{user.bio}</p>
            </div>
        )
    }
}

export default User;