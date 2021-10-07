import React from 'react'
import { Link } from 'react-router-dom'

class MyDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }

    this.onHover = this.onHover.bind(this)
  }

  onHover(e) {
    const newState = !this.state.open
    this.setState({ open: newState })
  }

  render() {
    return (
      <div
        className="cat-container"
        onMouseEnter={this.onHover}
        onMouseLeave={this.onHover}
      >
        <div className="cat-title">{this.props.title}</div>
        {this.state.open && (
          <ul className="menu" onClick={(e) => e.stopPropagation()}>
            {this.props.items.map((item, i) => (
              <Link to={`/category/${this.props.title}/${item}`} className='menu-item-link' key={i}>
                <li className="menu-item">
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default MyDropdown
