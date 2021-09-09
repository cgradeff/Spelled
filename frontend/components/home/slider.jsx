import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        
        e.preventDefault()
        // this.props.history.push('/')
    }

    render() {
        return(
            <div className='slider'>
                <FontAwesomeIcon className='switch' icon={['fas', 'chevron-left']} />
                <div className='slider-content'>
                    <div className='slider-text'>
                        <div>
                            <p className='slider-p'>THIS IS PLACEHOLDER TEXT</p>
                            <h2 className='slider-title'>Placeholder Here</h2>
                        </div>
                        <button onClick={this.handleClick}>Shop Now</button>
                    </div>
                    <img className="slider-img" src={window.placeholderUrl} alt="img" />
                </div>
                <FontAwesomeIcon className='switch' icon={['fas', 'chevron-right']} />
            </div>
            

        )
    }
}

export default Slider;