import React from "react";
import {Route, Switch, Link, Redirect, HashRouter} from 'react-router-dom'
import ModalContainer from './modal/modal_container';
import NavHeaderContainer from './nav/nav_container';
import Footer from './footer/footer';
import CatBar from './cat_bar/cat_bar';
import Home from './home/home';
import ShopContainer from './listings/shop_container';
import ListingShowContainer from "./listings/listing_show_container";
import UserContainer from './user/user_container';
import SellContainer from './listings/sell_container';
import EditListingContainer from './listings/edit_listing_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';


library.add(fab, faChevronRight, faChevronLeft, faSearch, faUserCircle);

const App = () => (
  <div>
    <div className='header'>
      <NavHeaderContainer />
    </div>

    <div className='body'>
      <ModalContainer />
      <CatBar />

      <Switch>
        <Route exact path='/' component={Home} ></Route>
        <Route exact path='/listings' component={ShopContainer} ></Route>
        <Route exact path='/listings/:listingId' component={ListingShowContainer} ></Route>
        <ProtectedRoute exact path="/sell" component={SellContainer} />
        <ProtectedRoute exact path="/listings/:listingId/edit" component={EditListingContainer} />
        <ProtectedRoute exact path='/users/:userId' component={UserContainer} ></ProtectedRoute>
        <Redirect to="/" />
      </Switch>
    </div>

    <div className='footer'>
      <Footer />
    </div>
  </div>
)

export default App;