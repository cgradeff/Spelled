import React from 'react';

class Trends extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return(
            <div className='trends'>
                <p className='trend-titles'>Shop Latest Trends</p>
                <div className='late-trends'>
                    <div className="late-img">
                        <img src={window.placeUrl} alt="img" />
                        <p>Commanders</p>
                    </div>
                    <div className="late-img">
                        <img src={window.placeUrl} alt="img" />
                        <p>Fetch Lands</p>
                    </div>
                    <div className="late-img">
                        <img src={window.placeUrl} alt="img" />
                        <p>Zombies</p>
                    </div>
                </div>
                <br />
                <p className='trend-titles'>Shop by Type</p>
                <div className='type-trends'>
                    <div className='type-box'>
                        <img className="type-img" src={window.holdUrl} alt="img" /> 
                        <p>Lands</p>
                    </div>
                    <div className='type-box'>
                        <img className="type-img" src={window.holdUrl} alt="img" /> 
                        <p>Creatures</p>
                    </div>
                    <div className='type-box'>
                        <img className="type-img" src={window.holdUrl} alt="img" /> 
                        <p>Planeswalkers</p>
                    </div>
                    <div className='type-box'>
                        <img className="type-img" src={window.holdUrl} alt="img" /> 
                        <p>Artifacts</p>
                    </div>
                    <div className='type-box'>
                        <img className="type-img" src={window.holdUrl} alt="img" /> 
                        <p>Enchantments</p>
                    </div>
                    <div className='type-box'>
                        <img className="type-img" src={window.holdUrl} alt="img" /> 
                        <p>Sorceries</p>
                    </div>
                    <div className='type-box'>
                        <img className="type-img" src={window.holdUrl} alt="img" /> 
                        <p>Instants</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Trends;