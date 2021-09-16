import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) :  
    // (() => this.props.openModal('start-signup'))
    (
      <Redirect to="/" />
    )


  )} />
);

const mSTP = state => (
  {loggedIn: Boolean(state.session.id)}
);

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
})

export const AuthRoute = withRouter(connect(mSTP, mDTP)(Auth));

export const ProtectedRoute = withRouter(connect(mSTP, mDTP)(Protected));