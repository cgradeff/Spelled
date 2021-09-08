import React from 'react';
import UserSettings from './user_settings_container';
import {Link} from 'react-router-dom';
// import logo from '../../../images/logo.png';

class NavHeader extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        
        e.preventDefault()
        // this.props.history.push('/')
    }

    render() {
        return(
            <div className='nav-header'>
                <Link to='/' className='title-cont'>
                    <div onClick={this.handleClick} >
                        <img className="title" src={window.logoUrl} alt="SPELLED" />
                    </div>
                </Link>
                
                <UserSettings />
            </div>

        )
    }
}

export default NavHeader;
