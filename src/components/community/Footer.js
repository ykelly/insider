import React from 'react';
import '../../App.css';
import "react-bulma-components/full";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear() }
  }

  render() {
    return (
      <footer>
          <nav className="navbar is-transparent is-dark is-fixed-bottom has-shadow">
              <div className="navbar-brand">
                  <a className="navbar-item">
                      <strong>Airbnb Insider</strong>
                  </a>
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
                              <div className="control">
                                  <a className="icons">
                                      <i className="fa fa-facebook"></i>
                                  </a>
                                  <a className="icons">
                                      <i className="fa fa-instagram"></i>
                                  </a>
                                  <a className="icons">
                                      <i className="fa fa-twitter"></i>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
      </footer>

    );
  }
}

export default Footer;
