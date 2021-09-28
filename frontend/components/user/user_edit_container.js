import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, editUser } from '../../actions/user_actions';
import EditUser from './user_edit';
import { withRouter } from 'react-router';

class EditUser extends React.Component {
  componentDidMount() {
    this.props.requestListing(this.props.match.params.listingId);
  }

  render () {
    const { user, formType, editUser } = this.props;

    if (!user) return null;
    return (
      <EditUser
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
    fetchUser: userId => dispatch(fetchUser(userId)),
    editUser: user => dispatch(editUser(user))
  }
}

export default connect(mSTP, mDTP)(EditUser);