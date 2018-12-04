import React from 'react';
import { Link } from 'react-router-dom';
import Header from './community/Header';
import Footer from './community/Footer';
import Article from './community/Article';
import Articles from './community/Articles';
import fire from './fire';

class Community extends React.Component {
  constructor(){
    super();
    this.state = {
      articles:[]
    };
  }

  componentDidMount() {
    const itemsRef = fire.database().ref('Articles');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for(let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          author: items[item].author,
          text: items[item].text,
          date: Date(items[item].date)
        });
      }
      this.setState({
        articles: newState
      });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Link to="./post"><button>Post</button></Link>
        <Articles articles = {this.state.articles} />
        <Footer />
      </div>
    )
  }
}

export default Community;
