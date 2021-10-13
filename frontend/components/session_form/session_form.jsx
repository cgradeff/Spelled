import React from 'react'

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDemoUser = this.handleDemoUser.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.props.closeModal();
      this.props.fetchUser(this.props.currentUser)
    }
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      })
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = Object.assign({}, this.state)
    this.props.processForm(user).then(this.props.closeModal)
    this.setState({
      email: '',
      password: '',
    })
  }

  handleDemoUser(e) {
    e.preventDefault()
    this.props.processForm({ email: 'Demo@gmail.com', password: 'ILoveMagic!' })
    // .then(this.props.closeModal())
    this.setState({
      email: '',
      password: '',
    })
  }

  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <br />
          <h3 className="form-type">{this.props.formType}</h3>
          {this.props.formType == 'Log in' && this.props.errors.length != 0 ? (
            <p className="inval-errors">{this.props.errors[0]}</p>
          ) : null}
          <div className="session-form">
            <label>
              Email Address
              <br />
              <input
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="session-input"
              />
            </label>
            {this.props.formType == 'Log in' ? (
              <p className="auth-errors">{this.props.errors[1]}</p>
            ) : (
              <p className="auth-errors">{this.props.errors[0]}</p>
            )}
            <br />
            <label>
              Password
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-input"
              />
            </label>
            {this.props.formType == 'Log in' ? (
              <p className="auth-errors">{this.props.errors[1]}</p>
            ) : (
              <p className="auth-errors">{this.props.errors[1]}</p>
            )}
            <br />
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
          <br />
          {this.props.formType == 'Log in' ? (
            <button className="session-submit" onClick={this.handleDemoUser}>
              Demo User
            </button>
          ) : null}
          <br />
        </form>
      </div>
    )
  }
}

export default SessionForm
