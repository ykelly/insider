import React from 'react';
import Header from './community/Header';
import Footer from './community/Footer';
import Article from './community/Article';
import fire from './fire';

class Community extends React.Component {
  constructor(){
    super();
    this.state = {
      items:[]
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
        items: newState
      });
    });
  }

  render() {
    return (
      <div>
        <Header />

        <section className = 'display-articles'>
          <div className = 'wrapper'>
            <ul>
              {
                this.state.items.map((item) => {
                  return(
                    <li key={item.id}>
                      <h3>{item.title}</h3>
                      <h4>{item.author}</h4>
                      <p>{item.text}</p>
                      <p>{item.date.toString()}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </section>

        <Footer />
      </div>
    )
  }
}

export default Community;
