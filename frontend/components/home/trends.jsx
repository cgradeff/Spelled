import React from 'react'
import { Link } from 'react-router-dom'

class Trends extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="trends">
        <p className="trend-titles">Shop Latest Trends</p>
        <div className="late-trends">
          <Link to={`/category/${'BODY'}/${'COMMANDER'}`} className="type-link"><div className="late-img">
            <img src={window.commanderUrl} alt="img" />
            <p>Commanders</p>
          </div></Link>
          <Link to={`/category/${'BODY'}/${'FETCH'}`} className="type-link"><div className="late-img">
            <img src={window.fetchLandUrl} alt="img" />
            <p>Fetch Lands</p>
          </div></Link>
          <Link to={`/category/${'BODY'}/${'ZOMBIE'}`} className="type-link"><div className="late-img">
            <img src={window.zombieUrl} alt="img" />
            <p>Zombies</p>
          </div></Link>
        </div>
        <br />
        <p className="trend-titles">Shop by Color</p>
        <div className="type-trends-container">
          <div className="type-trends">
            <Link to={`/category/${'COLOR'}/${'RED'}`} className="type-link">
              <div className="type-box">
                <img className="type-img" src={window.redUrl} alt="img" />
                <p>Red</p>
              </div>
            </Link>
            <Link to={`/category/${'COLOR'}/${'BLUE'}`} className='type-link'><div className="type-box">
              <img className="type-img" src={window.blueUrl} alt="img" />
              <p>Blue</p>
            </div></Link>
            <Link to={`/category/${'COLOR'}/${'GREEN'}`} className='type-link'><div className="type-box">
              <img className="type-img" src={window.greenUrl} alt="img" />
              <p>Green</p>
            </div></Link>
            <Link to={`/category/${'COLOR'}/${'BLACK'}`} className='type-link'><div className="type-box">
              <img className="type-img" src={window.blackUrl} alt="img" />
              <p>Black</p>
            </div></Link>
            <Link to={`/category/${'COLOR'}/${'WHITE'}`} className='type-link'><div className="type-box">
              <img className="type-img" src={window.whiteUrl} alt="img" />
              <p>White</p>
            </div></Link>
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
