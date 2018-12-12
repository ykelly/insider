import React from 'react';
import { Link } from 'react-router-dom';
import Header from './community/Header';
import Footer from './community/Footer';
import Articles from './community/Articles';
import fire from './fire';
import { AuthConsumer } from './AuthContext.js';


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
          date: items[item].date
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
        <Header/>
        <section className="hero is-primary"  style={{"justify-content": "center", "align-items": "center"}}>
          <div className="hero-body">
            <AuthConsumer >
              {({ isAuth, login, logout }) => (
                <div style={{"padding-top": "50%"}}>
                  {isAuth ? (
                    <span>
                      <button className="button is-white"><Link to="/post">Post</Link></button>
                      &nbsp;
                      <button className="button is-white" onClick={logout}>log out</button>
                    </span>
                  ) : (
                    <span>
                      <button className="button is-white" onClick={login}>Log in</button><br/>
                    </span> 
                  )}
                </div>
              )}
            </AuthConsumer>
          </div>
        </section>

        <section className = "section">
           <Articles className = "container" articles = {this.state.articles} />

        </section>

        <Footer />
      </div>
    )
  }
}

export default Community;
