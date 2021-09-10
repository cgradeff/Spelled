import React from 'react'

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
            {this.props.items.map((item) => (
              <li className='menu-item' key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default MyDropdown
