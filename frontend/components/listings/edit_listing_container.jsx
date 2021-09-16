import React from 'react';
import { connect } from 'react-redux';
import { requestListing, updateListing } from '../../actions/listing_actions';
import EditListing from './edit_listing';
import { withRouter } from 'react-router';

class EditListingForm extends React.Component {
  componentDidMount() {
    this.props.requestListing(this.props.match.params.listingId);
  }

  render () {
    const { listing, formType, submitListing } = this.props;

    if (!listing) return null;
    return (
      <EditListing
        listing={listing}
        submitListing={submitListing} 
        />
    );
  }
}

const mSTP = (state, ownProps) => {
  return {
    listing: state.entities.listings[ownProps.match.params.listingId],
  }
}

const mDTP = dispatch => {
  return {
    requestListing: listingId => dispatch(requestListing(listingId)),
    submitListing: listing => dispatch(updateListing(listing))
  }
}

export default connect(mSTP, mDTP)(EditListingForm);