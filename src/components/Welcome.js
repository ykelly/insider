import React from 'react';
import Header from './community/Header';
import Footer from './community/Footer';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
  render() {
    return (
      <section class="hero is-success is-fullheight">
        <div class="hero-head">
          <Header />
        </div>

        <div className="hero-body">
          <div className="container">
            <Link to="/"><p className="title is-1 is-spaced">
              Airbnb Insider
            </p></Link>
            <br/>

            <div className="columns is-desktop">


              <div class="column">
                <p className="subtitle">
                  As a (budget-oriented) traveler, I want to pay the lowest Airbnb rental price for the best possible location so that I can make the most of my vacation on a budget.
                </p>
              </div>
              <div class="column">
                <p className="subtitle">
                  As a (location-oriented) traveler, I want to compare housing prices to the Airbnb rental price for my chosen location so that I can make sure I am getting my money’s worth.
                </p>
              </div>

              <div class="column">
                <p className="subtitle">
                  As an Airbnb host, I want to set a price based on the value of my property so that I can maintain an attractive, popular Airbnb listing for the most value.
                </p>
              </div>
            </div>

            <Link to="/" className="button is-rounded">Go to Visualization Map</Link>
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
