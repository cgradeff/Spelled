import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

class Slider extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='slider'>
                <FontAwesomeIcon className='switch' icon={['fas', 'chevron-left']} />
                <div className='slider-content'>
                    <div className='slider-text'>
                        <div>
                            <p className='slider-p'>CURATED COLLECTIONS</p>
                            <h2 className='slider-title'>The best of MGT</h2>
                        </div>
                        <Link to='/listings'><button>Shop Now</button></Link>
                    </div>
                    <img className="slider-img" src={window.placeholderUrl} alt="img" />
                </div>
                <FontAwesomeIcon className='switch' icon={['fas', 'chevron-right']} />
            </div>
            

        )
    }
}

export default Slider;