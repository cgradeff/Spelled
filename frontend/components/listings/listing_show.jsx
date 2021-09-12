import React from 'react';


class ListingShow extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.props.requestListing(this.props.match.params.listingId)
    }

    render() { 
        return( 
            <div className="listing-show">
                <div className="listing-show-text">
                    <h1 className="listing-show-title">{this.props.listing.title}</h1>
                    <div className="listing-show-description">{this.props.listing.body}</div>
                    <div className="listing-show-price">{this.props.listing.price}</div>
                    <div className="listing-show-condition">{this.props.listing.condition}</div>
                    <div className="listing-show-rarity">{this.props.listing.rarity}</div>
                    <div className="listing-show-mana">{this.props.listing.mana}</div>
                    <div className="listing-show-offer">{this.props.listing.offer}</div>
                    <div className="listing-show-sold">{this.props.listing.sold}</div>
                    <div>
                        <button>PURCHASE</button>
                        <button>OFFER</button>
                        <button>MESSAGE</button>
                    </div>
                </div>

            </div>
         );
        
  
    }
}
 
export default ListingShow;
