import React from 'react';

class Sell extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.listing;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        this.props.submitListing(this.state);
    }

    update(field) {
       return e => this.setState({[field]: e.currentTarget.value});
    }

    componentDidMount() {
        this.props.requestListings();
    }

    render() {
        return (
            <div className='sell'>
                <h2>{this.props.formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    Title
                    <input type="text" value={this.state.title} onChange={this.update('title')}/>
                    <br />
                    Mana Cost 
                    <input type="mana" value={this.state.mana} onChange={this.update('mana')}/>
                    <br />
                    Rarity 
                    <input type="rarity" value={this.state.rarity} onChange={this.update('rarity')}/>
                    <br />
                    Condition 
                    <input type="condition" value={this.state.condition} onChange={this.update('condition')}/>
                    <br />
                    Description 
                    <input type="body" value={this.state.body} onChange={this.update('body')}/>
                    <br />
                    Price 
                    <input type="price" value={this.state.price} onChange={this.update('price')}/>
                    <br />
                    Offer 
                    <input type="offer" value={this.state.offer} onChange={this.update('offer')}/>
                    <br />
                    <input type="author_id" value={this.state.author_id} onChange={this.update('author_id')}/>

                    <button type='submit' value={this.props.formType}>Create</button>
                </form>
            </div>
        )
    }
}

export default Sell;