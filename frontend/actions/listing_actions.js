import * as ListingAPIUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const REMOVE_LISTING = 'REMOVE_LISTING';

const receiveListings = listings => {
    return {
        type: RECEIVE_LISTINGS,
        listings
    }
}

const receiveListing = listing => {
    return {
        type: RECEIVE_LISTING,
        listing
    }
}

const removeListing = listingId => {
    return {
        type: REMOVE_LISTING,
        listingId
    }
}

export const requestListings = () => dispatch => (
    ListingAPIUtil.fetchListings()
    .then(listings => dispatch(receiveListings(listings)))
)

export const requestListing = listingId => dispatch => (
    ListingAPIUtil.fetchListing(listingId)
    .then(listing => dispatch(receiveListing(listing)))
)
// here
export const createListing = (listing) => dispatch => (
    ListingAPIUtil.createListing(listing)
    .then(listing => dispatch(receiveListing(listing)))
)

export const updateListing = listing => dispatch => (
    ListingAPIUtil.updateListing(listing)
    .then(listing => dispatch(receiveListing(listing)))
)

export const deleteListing = listingId => dispatch => (
    ListingAPIUtil.deleteListing(listingId)
    .then(listingId => dispatch(removeListing(listingId.id)))
)
