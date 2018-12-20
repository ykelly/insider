import React from 'react';
import Header from './community/Header';
import Footer from './community/Footer';

class About extends React.Component {
  render() {
    return (
      <section class="hero is-fullheight">
        <div class="hero-head">
          <Header />

        </div>

        <div className="hero-body" id="about-page">
          <div className="container" id="about-page-alignment">

              <div id="about-icon" className="has-text-centered">
                  <img src={require("./../images/team.png")}
                       height="80px"
                       width="80px"/>
              </div>

              <div className="is-warning" id="about-statement">
                  <p className="title has-text-black">Outstanding Team</p>
                  <p className="about-subtitle" id="about">We want to enhance the travel experience for both the users and<br/>Airbnb hosts by providing them with a price comparison.</p>
              </div>

            <div className="columns is-desktop">
              <div class="column about-column">
                  <div className="about-circle-1">
                  </div>
                  <div className="card about-card">
                      <div className="card-content about-card-content">
                          <p className="title is-5">
                              <a className="has-text-black">Daniel Lim</a>
                          </p>
                          <p className="subtitle about-subtitle">
                              Lead UI Designer
                          </p>
                          <p className="has-text-success is-size-7">
                              Macalester College '20
                          </p>
                      </div>
                  </div>
              </div>

              <div class="column about-column">
                  <div className="about-circle-2">
                  </div>
                  <div className="card about-card">
                      <div className="card-content about-card-content">
                          <p className="title is-5">
                              <a className="has-text-black">Ruotong Wang</a>
                          </p>
                          <p className="subtitle about-subtitle">
                              Front-end Developer
                          </p>
                          <p className="has-text-success is-size-7">
                              Macalester College '19
                          </p>
                      </div>
                  </div>
              </div>

              <div class="column about-column">
                  <div className="about-circle-3">
                  </div>
                  <div className="card about-card">
                      <div className="card-content about-card-content">
                          <p className="title is-5">
                              <a className="has-text-black">Rock Pang</a>
                          </p>
                          <p className="subtitle about-subtitle">
                              Back-end Developer
                          </p>
                          <p className="has-text-success is-size-7">
                              Macalester College '20
                          </p>
                      </div>
                  </div>
              </div>

              <div class="column about-column">
                  <div className="about-circle-4">
                  </div>
                  <div className="card about-card">
                      <div className="card-content about-card-content">
                          <p className="title is-5">
                              <a className="has-text-black">Katya Kelly</a>
                          </p>
                          <p className="subtitle about-subtitle">
                              Data Scientist
                          </p>
                          <p className="has-text-success is-size-7">
                              Macalester College '19
                          </p>
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

export default About;
