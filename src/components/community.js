import React from 'react';
import Header from './community/Header';
import Footer from './community/Footer';
import Article from './community/Article';

class Community extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Article />
        <Footer />
      </div>
    )
  }
}

export default Community;
