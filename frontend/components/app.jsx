import React from "react";
import ModalContainer from './modal/modal_container';
import Nav from './nav/nav';
import Footer from './footer/footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons';

library.add(fab);

const App = () => (
  <div>
    {/* <h1>Spelled</h1> */}
    <ModalContainer />
    <Nav />
    <Footer />
  </div>
)

export default App;