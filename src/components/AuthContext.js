import React from 'react'

const AuthContext = React.createContext()

class AuthProvider extends React.Component {
  state = { isAuth: false }

  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({ isAuth: true });
    console.log(this.state.isAuth);
  }

  logout() {
    this.setState({ isAuth: false });
    console.log(this.state.isAuth);
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
