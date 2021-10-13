import React from 'react';
import { Link } from 'react-router-dom';

class Trends extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="trends">
        <p className="trend-titles">Shop Latest Trends</p>
        <div className="late-trends">
          <div className="late-img">
            <img src={window.commanderUrl} alt="img" />
            <p>Commanders</p>
          </div>
          <div className="late-img">
            <img src={window.fetchLandUrl} alt="img" />
            <p>Fetch Lands</p>
          </div>
          <div className="late-img">
            <img src={window.zombieUrl} alt="img" />
            <p>Zombies</p>
          </div>
        </div>
        <br />
        <p className="trend-titles">Shop by Rarity</p>
        <div className='type-trends-container'>
          <div className="type-trends">
            <div className="type-box">
              <img className="type-img" src={window.redUrl} alt="img" />
              <p>Red</p>
            </div>
            <div className="type-box">
              <img className="type-img" src={window.blueUrl} alt="img" />
              <p>Blue</p>
            </div>
            <div className="type-box">
              <img className="type-img" src={window.greenUrl} alt="img" />
              <p>Green</p>
            </div>
            <div className="type-box">
              <img className="type-img" src={window.blackUrl} alt="img" />
              <p>Black</p>
            </div>
            <div className="type-box">
              <img className="type-img" src={window.whiteUrl} alt="img" />
              <p>White</p>
            </div>
            {/* <div className='type-box'>
                        <img className="type-img" src={window.holdUrl} alt="img" /> 
                        <p>Sorceries</p>
                    </div>
                    <div className='type-box'>
                        <img className="type-img" src={window.holdUrl} alt="img" /> 
                        <p>Instants</p>
                    </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Trends
