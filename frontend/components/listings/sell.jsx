import React from 'react'

class Sell extends React.Component {
  constructor(props) {
    super(props)
    ;(this.state = {
      title: '',
      mana: '',
      rarity: '',
      condition: '',
      body: '',
      price: 0,
      offer: '',
      sold: 'false',
      author_id: this.props.currentUser.id,
      photoFile: null,
      photoUrl: null,
      types: '',
      colors: '',
    }),
      (this.handleSubmit = this.handleSubmit.bind(this))
    this.navToShow = this.navToShow.bind(this)
    this.updateColor = this.updateColor.bind(this)
    this.updateType = this.updateType.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id)
  }

  navToShow() {
    const url = `/users/${this.props.currentUser.id}/:listings`
    this.props.history.push(url)
  }

  handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('listing[title]', this.state.title)
    formData.append('listing[mana]', this.state.mana)
    formData.append('listing[rarity]', this.state.rarity)
    formData.append('listing[condition]', this.state.condition)
    formData.append('listing[body]', this.state.body)
    formData.append('listing[price]', this.state.price)
    formData.append('listing[offer]', this.state.offer)
    formData.append('listing[sold]', this.state.sold)
    formData.append('listing[author_id]', this.state.author_id)
    formData.append('listing[colors]', this.state.colors)
    formData.append('listing[types]', this.state.types)
    if (this.state.photoFile) {
      formData.append('listing[photo]', this.state.photoFile)
    }
    this.props
      .submitListing(formData)
      .then(this.props.fetchUser(this.props.currentUser.id))
      .then(this.navToShow())
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  updateColor() {
      return (e) => this.setState({ colors: this.state.colors += e.currentTarget.value })
  }

  updateType() {
      return (e) => this.setState({ types: this.state.types += e.currentTarget.value })
  }

  handleFile(e) {
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result })
    }
    if (file) {
      fileReader.readAsDataURL(file)
    }
  }

  render() {
    const preview = this.state.photoUrl ? (
      <img src={this.state.photoUrl} />
    ) : null

    return (
      <div className="sell">
        <div className="sell-content">
          <h2>Add a new listing</h2>
          <br />
          <form onSubmit={this.handleSubmit} className="sell-form">
            <div className="sell-title">TITLE</div>
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
            />
            <br />
            <br />
            <div className="sell-title">MANA COST</div>
            <input
              type="mana"
              value={this.state.mana}
              onChange={this.update('mana')}
            />
            <br />
            <br />
            <div className="sell-title">RARITY</div>
            <select
              type="rarity"
              value={this.state.rarity}
              onChange={this.update('rarity')}
            >
              <option value=""> </option>
              <option value="Basic Land">Basic Land</option>
              <option value="Common">Common</option>
              <option value="Uncommon">Uncommon</option>
              <option value="Rare">Rare</option>
              <option value="Mythic Rare">Mythic Rare</option>
            </select>
            <br />
            <br />
            <div className="sell-title">COLORS</div>
            <br />
            <label>
              <input
                type="radio"
                value='Red '
                // checked={this.state.selectedOption === 'Red'}
                onChange={this.updateColor()}
              />
              <div>Red</div>
            </label>
            <label>
              <input
                type="radio"
                value='Blue '
                // checked={this.state.selectedOption === 'Red'}
                onChange={this.updateColor()}
              />
              <div>Blue</div>
            </label>
            <label>
              <input
                type="radio"
                value='Green '
                // checked={this.state.selectedOption === 'Red'}
                onChange={this.updateColor()}
              />
              <div>Green</div>
            </label>
            <label>
              <input
                type="radio"
                value='Black '
                // checked={this.state.selectedOption === 'Red'}
                onChange={this.updateColor()}
              />
              <div>Black</div>
            </label>
            <label>
              <input
                type="radio"
                value='White '
                // checked={this.state.selectedOption === 'Red'}
                onChange={this.updateColor()}
              />
              <div>White</div>
            </label>
            <label>
              <input
                type="radio"
                value='Colorless '
                // checked={this.state.selectedOption === 'Red'}
                onChange={this.updateColor()}
              />
              <div>Colorless</div>
            </label>
            <br />
            <br />
            <div className="sell-title">TYPES</div>
            <br />
            <label>
              <input
                type="radio"
                value='Land '
                // checked={this.state.selectedOption === 'Red'}
                onChange={this.updateType()}
              />
              <div>Land</div>
            </label>
            <label>
              <input
                type="radio"
                value='Artifact '
                // checked={this.state.selectedOption === 'Red'}
                onChange={this.updateType()}
              />
              <div>Artifact</div>
            </label>
            <label>
              <input
                type="radio"
                value='Creature '
                // checked={this.state.selectedOption === 'Red'}
                onChange={this.updateType()}
              />
              <div>Creature</div>
            </label>
            <label>
              <input
                type="radio"
                value='Planeswalker '
                // checked={this.state.selectedOption === 'Red'}
                onChange={this.updateType()}
              />
              <div>Planeswalker</div>
            </label>
            <label>
              <input
                type="radio"
                value='Sorcery '
                // checked={this.state.selectedOption === 'Red'}
                onChange={this.updateType()}
              />
              <div>Sorcery</div>
            </label>
            <label>
              <input
                type="radio"
                value='Enchantment '
                // checked={this.state.selectedOption === 'Red'}
                onChange={this.updateType()}
              />
              <div>Enchantment</div>
            </label>
            <label>
              <input
                type="radio"
                value='Instant '
                // checked={this.state.selectedOption === 'Red'}
                onChange={this.updateType()}
              />
              <div>Instant</div>
            </label>
            <br />
            <br />
            <div className="sell-title">CONDITION</div>
            <select
              type="condition"
              value={this.state.condition}
              onChange={this.update('condition')}
            >
              <option value=""> </option>
              <option value="New">New</option>
              <option value="Like-New">Like New</option>
              <option value="Used">Used</option>
              <option value="Poor">Poor</option>
            </select>
            <br />
            <br />
            <div className="sell-title">DESCRIPTION</div>
            <textarea
              type="body"
              value={this.state.body}
              onChange={this.update('body')}
            />
            <br />
            <br />
            <div className="sell-title">PRICE</div>
            <input
              type="price"
              value={this.state.price}
              onChange={this.update('price')}
            />
            <br />
            <br />
            <div className="sell-title">OFFER</div>
            <select
              type="offer"
              value={this.state.offer}
              onChange={this.update('offer')}
            >
              <option value=""> </option>
              <option value="false">False</option>
              <option value="true">True</option>
            </select>
            <br />
            <br />
            <div className="sell-title">PHOTO</div>
            <input
              type="file"
              onChange={this.handleFile.bind(this)}
              id="photo-input"
            />
            <div className="sell-preview">{preview}</div>
            <br />
            <button type="submit">Publish</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Sell
