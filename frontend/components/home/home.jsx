import React from 'react';
import {Link} from 'react-router-dom';
import Slider from './slider';
import Trends from './trends';

class Home extends React.Component {
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
            <div className='home'>
                <Slider />
                <Trends />
                <div className='home-footer'>
                    <div className='text'>
                        <p>The one-stop destination for buying,</p>
                        <p>selling and exporing Magic cards.</p>
                    </div>
                    
                    <button>SHOP THE FEED</button>
                </div>
            </div>
        )
    }
}

export default Home;
