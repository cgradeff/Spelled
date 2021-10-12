import React from 'react';
import { withRouter } from 'react-router';

class EditListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.listing;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navToShow = this.navToShow.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitListing(this.state)
        this.navToShow();
    }

    update(field) {
       return e => this.setState({[field]: e.currentTarget.value}); 
    }

    navToShow() {
        const url = `/users/${this.props.listing.author_id}/${'listings'}`
        this.props.history.push(url);
    }

    render() {
        return (
            <div className='sell'>
                <div className='sell-content'>
                <h2>Edit your listing</h2>
                <br />
                <form onSubmit={this.handleSubmit} className='sell-form'>
                    <div className='sell-title'>TITLE</div>
                    <input type="text" value={this.state.title} onChange={this.update('title')}/>
                    <br />
                    <br />
                    <div className='sell-title'>MANA COST</div> 
                    <input type="mana" value={this.state.mana} onChange={this.update('mana')}/>
                    <br />
                    <br />
                    <div className='sell-title'>RARITY</div> 
                    <select type="rarity" value={this.state.rarity} onChange={this.update('rarity')}>
                        <option value="Basic Land">Basic Land</option>
                        <option value="Common">Common</option>
                        <option value="Uncommon">Uncommon</option>
                        <option value="Rare">Rare</option>
                        <option value="Mythic Rare">Mythic Rare</option>
                    </select>
                    <br />
                    <br />
                    <div className='sell-title'>CONDITION</div> 
                    <select type="condition" value={this.state.condition} onChange={this.update('condition')}>
                        <option value="New">New</option>
                        <option value="Like-New">Like New</option>
                        <option value="Used">Used</option>
                        <option value="Poor">Poor</option>
                    </select>
                    <br />
                    <br />
                    <div className='sell-title'>DESCRIPTION</div> 
                    <textarea type="body" value={this.state.body} onChange={this.update('body')}/>
                    <br />
                    <br />
                    <div className='sell-title'>PRICE</div> 
                    <input type="price" value={this.state.price} onChange={this.update('price')}/>
                    <br />
                    <br />
                    <div className='sell-title'>OFFER</div>  
                    <select type="offer" value={this.state.offer} onChange={this.update('offer')}>
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>
                    <br />
                    <br />
                    <div className='sell-title'>SOLD</div>  
                    <select type="sold" value={this.state.sold} onChange={this.update('sold')}>
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>

                    <button type='submit'>Publish</button>
                </form>
                </div>
            </div>
        )
    }
}

export default withRouter(EditListing);