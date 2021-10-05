import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.linkedInUrl = "https://www.linkedin.com/in/carly-gradeff-62438a1a0/";
        this.githubUrl = "https://github.com/cgradeff/Spelled";
    }

    render() {
        return (
            <div className='footer'>
                <div className='foot-links'>
                    <a target='_blank' href="https://cgradeff.github.io/carly-gradeff/"><p>ABOUT ME</p></a>
                    <a href="mailto:cgradeff@gmail.com"><p>CONTACT</p></a>
                    <a target='_blank' href="https://www.grailed.com/"><p>GRAILED</p></a>
                </div>
                <div className='foot-icons'>
                    <a className='icon' target='_blank' href="https://angel.co/u/carly-gradeff"><FontAwesomeIcon icon={['fab', 'angellist']} /></a>
                    <a className='icon' href={this.linkedInUrl} target='_blank'><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                    <a className='icon' href={this.githubUrl} target='_blank'><FontAwesomeIcon icon={['fab', 'github']} /></a>
                    <p className='foot-name'>Spelled 2021</p>
                </div>
            </div>
        )
    }
}

export default Footer;