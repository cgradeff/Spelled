import { connect } from 'react-redux';
import { createListing } from '../../actions/listing_actions';
import Sell from './sell';

const mSTP = state => {
    console.log(state)
    return {
        currentUser: state.entities.users[state.session.id],
        listing: {
            title: '',
            mana: '',
            rarity: '',
            condition: '',
            body: '',
            price: 0,
            offer: '',
            author_id: state.entities.users[state.session.id].id
        },
        formType: 'Create Listing'
    }
}

const mDTP = dispatch => {
    return {
        submitListing: listing => dispatch(createListing(listing))
    }
}

export default connect(mSTP, mDTP)(Sell);