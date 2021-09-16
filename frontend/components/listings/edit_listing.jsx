import React from 'react';

class EditListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.listing;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        this.props.submitListing(this.state)
    }

    update(field) {
       return e => this.setState({[field]: e.currentTarget.value}); 
    }


    render() {
        console.log(this);
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
                    <input type="sold" value={this.state.sold} onChange={this.update('sold')}/>

                    <button type='submit' value={this.props.formType}>Publish</button>
                </form>
            </div>
        )
    }
}

export default EditListing;