import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemoUser(e) {
    this.setState({email: 'Demo@gmail.com', password: 'ILoveMagic!'})
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          {this.props.formType}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
          {this.props.formType == 'Log in' ? <button className='session-submit' onClick={this.handleDemoUser}>Demo User</button> : null}
          {this.props.formType == 'Create an Account' ? <p className='modal-bottom-text'>Already have an account? <span>{this.props.otherForm}</span></p>
            : <p className='modal-bottom-text'>Don't have an account? <span>{this.props.otherForm}</span></p> }
        </form>
      </div>
    )
  }
}

export default SessionForm;