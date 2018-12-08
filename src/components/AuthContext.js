import React from 'react';
import fire, { auth, provider } from './fire';

const AuthContext = React.createContext()

class AuthProvider extends React.Component {
  state = { isAuth: false, user: null }

  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          isAuth: true,
          user: user
        })
      }
    })
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          isAuth: true,
          user: user
        })
      })
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          isAuth: false,
          user: null
        })
      })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          user: this.state.user,
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
