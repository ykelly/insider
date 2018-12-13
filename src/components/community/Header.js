import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { AuthConsumer } from '.././AuthContext.js';

class Header extends React.Component {
  render() {
    return (
      <div>
          <nav className="navbar is-light is-fixed-top has-shadow" id="top-nav">
              <div className="navbar-brand">
                  <Link to="/welcome" className="navbar-item">
                      <strong>Airbnb Insider</strong>
                  </Link>
                  <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
              </div>
              <div className="navbar-menu is-right">
                  <div className="navbar-start">
                  </div>
                  <div className="navbar-end">
                      <div className="navbar-item">
                          <div className="field is-grouped">
                              <Link to="/welcome" className="navbar-item">Home</Link>
                              <Link to="/" className="navbar-item">Map</Link>
                              <Link to="/about" className = "navbar-item">About</Link>
                              <Link to="/community" className = "navbar-item">Community</Link>
                              <AuthConsumer >
                                  {({ isAuth, login, logout }) => (
                                      <div id="account">
                                          {isAuth ? (
                                              <span>
                                                  <a className="button is-danger" onClick={logout}>
                                                    <span className="icon">
                                                        <i className="fa fa-sign-out"></i>
                                                    </span>
                                                      <span><p className="account-button">Sign Out</p></span>
                                                  </a>
                                              </span>
                                                ) : (
                                              <span>
                                                  <a className="button is-success" onClick={login}>
                                                    <span className="icon">
                                                        <i className="fa fa-sign-in"></i>
                                                    </span>
                                                      <span><p className="account-button">Sign In</p></span>
                                                  </a>
                                              </span>
                                          )}
                                      </div>
                                  )}
                              </AuthConsumer>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
      </div>
    );
  }
}

export default Header;
// <header style={{fontSize: '2em'}}>
//   <h1>Community</h1>
// </header>
