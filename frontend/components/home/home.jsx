import React from 'react';
import {Link} from 'react-router-dom';
import Slider from './slider';
import Trends from './trends';

// link shop feed button to shop pg

class Home extends React.Component {
    constructor(props) {
        super(props)
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
                    
                    <Link to='/listings'><button>SHOP THE FEED</button></Link>
                </div>
            </div>
        )
    }
}

export default Home;
