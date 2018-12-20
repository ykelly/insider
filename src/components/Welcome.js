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

              <div id="home-button-area" className="has-text-centered">
                  <a href="/" className="button is-info is-inverted is-outlined is-rounded ">
                    <span className="icon is-small is-left">
                        <i className="fa fa-map"></i>
                    </span>
                    <span id="home-button">
                      <p>Go to Map</p>
                    </span>
                  </a>
              </div>

              <div className="is-warning" id="mission-statement">
              <p className="title has-text-white">Our Mission</p>
              <p className="home-subtitle" id="mission">We want to enhance the travel experience for the both users and<br/>Airbnb hosts by providing them with a price comparison.</p>
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
                              Users want a home host with the highest value at the lowest price point for the best travel experience.
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
                              We find the middle ground for both the traveler and host in order to meet the needs of both parties.</p>
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
                              Hosts want to set a reasonable price for their homes so that their listings are attractive to users.</p>
                      </div>
                  </div>
              </div>
            </div>
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
