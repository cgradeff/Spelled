import React from 'react'
import UserSettings from './user_settings_container'
import {Link} from 'react-router-dom'

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
                <Link to='/' className='title'>
                    <div onClick={this.handleClick} >
                        <h1 className='title'>SPELLED</h1>
                    </div>
                </Link>
                <UserSettings />
            </div>

        )
    }
}

export default NavHeader;
