import React from 'react';
import { Redirect } from 'react-router-dom';

class Sell extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.listing;
        this.state = {
            title: '',
            mana: '',
            rarity: '',
            condition: '',
            body: '',
            price: 0,
            offer: '',
            sold: 'false',
            author_id: this.props.currentUser.id,
            photoFile: null,
            photoUrl: null
            // photo: {imageFile: null, imageUrl: null}
        },
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData
        formData.append('listing[title]', this.state.title);
        formData.append('listing[mana]', this.state.mana);
        formData.append('listing[rarity]', this.state.rarity);
        formData.append('listing[condition]', this.state.condition);
        formData.append('listing[body]', this.state.body);
        formData.append('listing[price]', this.state.price);
        formData.append('listing[offer]', this.state.offer);
        formData.append('listing[sold]', this.state.sold);
        formData.append('listing[author_id]', this.state.author_id);
        if (this.state.photoFile) {
            formData.append('listing[photo]', this.state.photoFile);
        };
        this.props.submitListing(formData)
        // .then(this.setState({ body: "" }))

        // this.props.submitListing(this.state)
    }

    update(field) {
       return e => this.setState({[field]: e.currentTarget.value}); // {listing: { ...this.state.listing, [field]: e.currentTarget.value}}
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        };
        if (file) {
            fileReader.readAsDataURL(file);
        };
        // this.setState({ ...this.state,  photoFile: e.currentTarget.files[0]})
    }

    render() {
        // console.log(this.state);
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
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
                    {/* <input type="sold" value={this.state.sold} onChange={this.update('sold')}/> */}
                    {/* <input type="author_id" value={this.state.author_id} onChange={this.update('author_id')}/> */}
                    <input type="file" onChange={this.handleFile.bind(this)}/>
                    <div>
                        {preview}
                    </div>
                        {/* value={this.state.listing.photoURL} */}
                    <button type='submit' value={this.props.formType}>Publish</button>
                </form>
            </div>
        )
    }
}

export default Sell;