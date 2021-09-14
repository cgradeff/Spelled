import { connect } from 'react-redux';
import { createListing, requestListings } from '../../actions/listing_actions';
import Sell from './sell';

const mSTP = state => {
    console.log(state)
    // console.log(state.entities.users[state.session.id].id)
    return {
        currentUser: state.entities.users[state.session.id],
        listings: Object.values(state.entities.listings),
        listing: {
            title: '',
            mana: '',
            rarity: '',
            condition: '',
            body: '',
            price: 0,
            offer: '',
            sold: 'false',
            author_id: state.entities.users[state.session.id].id
        },
        formType: 'Create Listing'
    }
}

const mDTP = dispatch => {
    return {
        submitListing: listing => dispatch(createListing(listing)),
        requestListings: () => dispatch(requestListings()), 
    }
}

export default connect(mSTP, mDTP)(Sell);