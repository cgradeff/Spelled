import React from 'react';
import ClickDropdown from '../dropdown/dropdown';
import Dropdown from 'react-bootstrap/Dropdown';

class CatBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='cat-bar'>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-types" >TYPES</Dropdown.Toggle>
                    <Dropdown.Menu className='menu'>
                        <Dropdown.Item className='menu-item' href="#/action-1">LANDS</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-2">CREATURES</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-2">PLANESWALKERS</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">ENCHANTMENTS</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">ARTIFACTS</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">INSTANTS</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">SORCERIES</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-rarity">RARITY</Dropdown.Toggle>
                    <Dropdown.Menu className='menu'>
                        <Dropdown.Item className='menu-item' href="#/action-1">BASIC LANDS</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-1">COMMON</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-2">UNCOMMON</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">RARE</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">MYTHIC RARE</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-mana">MANA COST</Dropdown.Toggle>
                    <Dropdown.Menu className='menu'>
                        <Dropdown.Item className='menu-item' href="#/action-1">X</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-2">0</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">1</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">2</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">3</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">4</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">5</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">6</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">7+</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-color">COLOR</Dropdown.Toggle>
                    <Dropdown.Menu className='menu'>
                        <Dropdown.Item className='menu-item' href="#/action-1">X</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-2">0</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">1</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">2</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">3</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">4</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">5</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">6</Dropdown.Item>
                        <br />
                        <Dropdown.Item className='menu-item' href="#/action-3">7+</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

export default CatBar;
