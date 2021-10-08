import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.num = 0
    this.slider_content = [
      [window.placeholderUrl, 'CURATED COLLECTIONS', 'The Best of MGT'],
      [window.slider2Url, 'LATEST SETS', 'Modern Horizons 2'],
      [window.slider1Url, 'EVERY CARD. EVERY SET. ANY PRICE.', 'New This Week']
    ]
    this.state = {
      current: this.slider_content[0],
    }
    this.onClickForward = this.onClickForward.bind(this)
    this.onClickBack = this.onClickBack.bind(this)
  }

  onClickForward(e) {
    e.preventDefault()
    this.num === 2 ? this.num = 0 : this.num += 1
    this.setState({
      current: this.slider_content[this.num],
    })
  }

  onClickBack(e) {
    e.preventDefault()
    this.num === 0 ? this.num = 2 : this.num -= 1
    this.setState({
      current: this.slider_content[this.num],
    })
  }

  render() {
    return (
      <div className="slider">
        <FontAwesomeIcon
          className="switch"
          icon={['fas', 'chevron-left']}
          onClick={this.onClickBack}
        />
        <div className="slider-content">
          <div className="slider-text">
            <div>
              <p className="slider-p">{this.state.current[1]}</p>
              <h2 className="slider-title">{this.state.current[2]}</h2>
            </div>
            <Link to="/listings">
              <button>Shop Now</button>
            </Link>
          </div>
          <img className="slider-img" src={this.state.current[0]} alt="img" />
        </div>
        <FontAwesomeIcon
          className="switch"
          icon={['fas', 'chevron-right']}
          onClick={this.onClickForward}
        />
      </div>
    )
  }
}

export default Slider
