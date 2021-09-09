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
                <div >

                </div>
            </div>
        )
    }
}

export default Home;
