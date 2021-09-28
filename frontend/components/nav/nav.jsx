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
        e.preventDefault();
        if (!this.props.currentUser) {
            this.props.openModal('start-login')
        } else {
            this.props.history.push('/sell')
        }
    }

    render() {
        return(
            <div className='nav-header'>
                <div className='title-cont'>
                    <Link to='/' >
                            <img className="title" src={window.logoUrl} alt="SPELLED" />
                    </Link>
                    <SearchBar />
                </div>
                
                <div className='nav-right'>
                    <div className='nav-links'>
                        <Link to='/listings' className='shop-link'>
                            <div >SHOP</div>
                        </Link>
                        <button className='sell-link' onClick={this.handleClick}>SELL</button>
                    </div>
                    <UserSettings />
                </div>
                
            </div>

        )
    }
}

export default NavHeader;
