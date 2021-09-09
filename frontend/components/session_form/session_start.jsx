import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';


class LoginStart extends React.Component {
    constructor(props) {
        super(props)
    }

    stopProp(e) {
        
        e.stopPropagation();
    }

    render() {
        let component = <LoginFormContainer />
        
        return (
            <div className='modal-background' onClick={this.props.closeModal}>
                <div className='modal-child' onClick={this.stopProp}>
                    <h3 className="form-type">Log in</h3>
                    <button className='modal-bottom-button'
                     onClick={(e) => {
                        e.preventDefault();
                        component 
                    }}>Log in with Email</button> 
                </div>
            </div>
        )
    }
}

export default LoginStart;