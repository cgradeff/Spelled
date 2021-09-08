import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='footer'>
                <div className='foot-links'>
                    <p>ABOUT</p>
                    <p>CONTACT</p>
                </div>
                <div className='foot-icons'>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </div>
            </div>
        )
    }
}

export default Footer;