import React from 'react';
import { Redirect } from 'react-router-dom';

class Sell extends React.Component {
    constructor(props) {
        super(props);
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
            photoUrl: null,
            names: [],
            colors: []
        },
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navToShow = this.navToShow.bind(this);
    }
    
    navToShow() {
        const url = `/users/${this.props.currentUser.id}`
        // const url = '/listings'
        this.props.history.push(url);
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
        formData.append('listing[colors]', this.state.colors)
        if (this.state.photoFile) {
            formData.append('listing[photo]', this.state.photoFile);
        };
        this.props.submitListing(formData)
        .then(this.navToShow());
    }

    update(field) {
       return e => this.setState({[field]: e.currentTarget.value}); 
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
    }

    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;

        return (
            <div className='sell'>
                <div className='sell-content'>
                <h2>Add a new listing</h2>
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
                        <option value=""> </option>
                        <option value="Basic-Land">Basic Land</option>
                        <option value="Common">Common</option>
                        <option value="Uncommon">Uncommon</option>
                        <option value="Rare">Rare</option>
                        <option value="Mythic-Rare">Mythic Rare</option>
                    </select>
                    <br />
                    <br />
                    <div className='sell-title'>CONDITION</div> 
                    <select type="condition" value={this.state.condition} onChange={this.update('condition')}>
                        <option value=""> </option>
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
                        <option value=""> </option>
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>
                    <br />
                    <br />
                    <div className='sell-title'>PHOTO</div>
                    <input type="file" onChange={this.handleFile.bind(this)} id='photo-input'/>
                    <div className='sell-preview'>
                        {preview}
                    </div>
                    <br />
                    <button type='submit'>Publish</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Sell;