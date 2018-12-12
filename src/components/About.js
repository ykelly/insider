import React from 'react';
import Header from './community/Header';
import Footer from './community/Footer';

class About extends React.Component {
  render() {
    return (
      <section class="hero is-success is-fullheight">
        <div class="hero-head">
          <Header />

        </div>

        <div className="hero-body">
          <div className="container">
            <section>
              <p className="title is-1">
                About
              </p>
            </section>
            <br/>

            <div className="columns is-desktop">
              <div class="column">
                <p className="subtitle">
                  Rock's Profile
                </p>
              </div>

              <div class="column">
                <p className="subtitle">
                  Katya Profile
                </p>
              </div>

              <div class="column">
                <p className="subtitle">
                  Ruotong's Profile
                </p>
              </div>

              <div class="column">
                <p className="subtitle">
                  Daniel's Profile
                </p>
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

export default About;
