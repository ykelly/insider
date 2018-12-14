import React from 'react';
import Header from './community/Header';
import Footer from './community/Footer';
import { Link } from 'react-router-dom';
import './../App.css';


class Welcome extends React.Component {
  render() {
    return (
      <section class="hero is-fullheight" id="home-section">
        <div class="hero-head">
          <Header />
        </div>

        <div className="hero-body" id="home-body">
          <div className="container">
              <video id="background-video" loop autoPlay muted>
                  <source src={require("../video/airbnb.mp4")} type="video/mp4"/>
              </video>

            <Link to="/"><p className="title is-spaced has-text-white" id="home-title">
              Airbnb Insider
            </p></Link>

            <div className="is-warning" id="mission-statement">
              <p className="title has-text-white">Our Mission</p>
              <p className="home-subtitle" id="mission">We want to provide the perfect experience for both the traveler and<br/>the Airbnb host by providing them with a reasonable price point.</p>
            </div>

            <div className="columns is-desktop home-columns">
              <div class="column home-column">
                  <div className="home-circle">
                    <img className="home-icon" src={require("../images/trekking.png")} width="50px" height="50px"/>
                  </div>
                  <div className="card home-card">
                    <div className="card-content home-card-content">
                          <p className="title is-5">
                              <a className="has-text-black">User</a>
                          </p>
                          <p className="subtitle home-subtitle">
                              Users look for a home with aspernatur aut odit fugit, consequuntur magni dolores anescriunts.
                          </p>
                      </div>
                  </div>
              </div>
              <div class="column home-column home-columns">
                <div className="home-circle" id="green-circle">
                    <img className="home-icon" src={require("../images/money.png")} width="50px" height="50px"/>

                </div>
                <div className="card home-card">
                      <div className="card-content home-card-content">
                          <p className="title is-5">
                              <a className="has-text-black">Home Value</a>
                          </p>
                          <p className="subtitle home-subtitle">
                              We find the middle ground for both the traveler and host in order voluptears aspernatur aut odit fugit, consequuntur magni dolores.                          </p>
                      </div>
                  </div>
              </div>
              <div class="column home-column home-columns">
                <div className="home-circle">
                    <img className="home-icon" src={require("../images/resort.png")} width="50px" height="50px"/>

                </div>
                <div className="card home-card">
                      <div className="card-content home-card-content">
                          <p className="title is-5">
                              <a className="has-text-black">Host</a>
                          </p>
                          <p className="subtitle home-subtitle">
                              Hosts want to set a reasonable price for their homes so that Nemo
                              enim ipsam voluptatem voluptears aspernatur aut odit fugit.                          </p>
                      </div>
                  </div>
              </div>
            </div>
            {/*<Link to="/" className="button is-rounded">Go to Visualization Map</Link>*/}
          </div>
        </div>
        <div class="hero-foot">
          <Footer />
        </div>
      </section>
    )
  }
}

export default Welcome;
