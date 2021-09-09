import React from 'react';
import UserSettings from './user_settings_container';
import SearchBar from './search_bar';
import {Link} from 'react-router-dom';

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
                <div className='title-cont'>
                    <Link to='/' >
                        <div onClick={this.handleClick} >
                            <img className="title" src={window.logoUrl} alt="SPELLED" />
                        </div>
                    </Link>
                    <SearchBar />
                </div>
                
                <div className='nav-right'>
                    <div className='nav-links'>
                        <p>SHOP</p>
                        <p>SELL</p>
                    </div>
                    <UserSettings />
                </div>
                
            </div>

        )
    }
}

export default NavHeader;
