import React from 'react';
import Header from './community/Header';
import Footer from './community/Footer';

class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section class="section">
          <div class="container">
            <h1 class="title">About</h1>
            <h2 class="subtitle">
              This is the About page
            </h2>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default About;
