import React from 'react';
import {withRouter} from 'react-router';

class UserSettings extends React.Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        
        const signedIn = () => {
            return (
                <div>
                    <div className='user-settings-options'>
                        <button className='user-settings-button' onClick={this.onClick}>Logout</button>
                    </div>
                </div>
            )
        }

        const noUser = () => {
            return (
                <div>
                    <div className='user-settings-options'>
                        <button className='user-settings-button' onClick={() => this.props.openModal('login')}>LOGIN</button>
                        <button className='user-settings-button' onClick={() => this.props.openModal('signup')}>SIGN UP</button>
                    </div>
                </div>
            )
        }
        
        return this.props.currentUser ? signedIn() : noUser();
    }
}

export default withRouter(UserSettings);