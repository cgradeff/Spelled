import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div className='search-bar'>
                <form className='search-form' action="">
                    <button className='search-icon'><FontAwesomeIcon icon={['fas', 'search']} /></button>
                    <input className="search-input" 
                            type="text" 
                            placeholder="Search" />
                    <button className='search-button'>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;