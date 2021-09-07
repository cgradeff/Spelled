import React from "react";
import ModalContainer from './modal/modal_container';
import UserSettings from './nav/user_settings_container';

const App = () => (
  <div>
    <h1>Spelled</h1>
    <ModalContainer />
    <UserSettings />
  </div>
)

export default App;