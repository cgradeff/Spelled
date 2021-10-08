import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.history.push(`/shop/${this.state.search}`)
        this.setState({search: ''})
    }

    update(field) {
       return e => this.setState({[field]: e.currentTarget.value}); 
    }

    render() {

        return (
            <div className='search-bar'>
                <form onSubmit={this.handleSubmit} className='search-form'>
                    <button className='search-icon'><FontAwesomeIcon icon={['fas', 'search']} /></button>
                    <input className="search-input"
                            type="text"
                            onChange={this.update('search')}
                            placeholder="Search by card name" 
                            />
                    <button type='submit' className='search-button'>Search</button>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBar)
