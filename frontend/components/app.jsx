import React from "react";
import ModalContainer from './modal/modal_container';
import Nav from './nav/nav';
import Footer from './footer/footer';
import CatBar from './cat_bar/cat_bar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(fab);

const App = () => (
  <div>
    <ModalContainer />
    <Nav />
    <CatBar />
    <Footer />
  </div>
)

export default App;