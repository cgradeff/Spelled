import React from 'react'
import MyDropdownMenu from '../dropdown/MyDropdownMenu'

class CatBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.cats = [
      {
        title: 'TYPES',
        items: [
          'LANDS',
          'CREATURES',
          'PLANESWALKERS',
          'ENCHANTMENTS',
          'ARTIFACTS',
          'INSTANTS',
          'SORCERIES',
        ],
      },
      {
        title: 'RARITY',
        items: ['BASIC LAND', 'COMMON', 'UNCOMMON', 'RARE', 'MYTHIC RARE'],
      },
      { title: 'MANA COST', items: ['X', 0, 1, 2, 3, 4, 5, 6, '7+'] },
      {
        title: 'COLOR',
        items: ['RED', 'BLACK', 'BLUE', 'GREEN', 'WHITE', 'MULTI'],
      }, 
    ]
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <div className="cat-bar">
        {this.cats.map((category) => (
          <MyDropdownMenu title={category.title} items={category.items} key={category.title}/>
        ))}
      </div>
    )
  }
}

export default CatBar
