import React from 'react';
import firebase, { auth, provider } from './fire.js';

const AuthContext = React.createContext()

class AuthProvider extends React.Component {
  state = { isAuth: false, user: null }

  constructor() {
    super()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user: user,
          isAuth: true
        })
      })
  }

  logout() {
    this.setState({ isAuth: false })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
