import React from "react";
import {Route, Switch, Link, Redirect, HashRouter} from 'react-router-dom'
import ModalContainer from './modal/modal_container';
import Nav from './nav/nav';
import Footer from './footer/footer';
import CatBar from './cat_bar/cat_bar';
import Home from './home/home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


library.add(fab, faChevronRight, faChevronLeft);

const App = () => (
  <div>
    <div className='header'>
      <Nav />
    </div>

    <div className='body'>
      <ModalContainer />
      <CatBar />

      <Switch>
        <Route path='/' component={Home} ></Route>
      </Switch>
    </div>

    <div className='footer'>
      <Footer />
    </div>
  </div>
)

export default App;