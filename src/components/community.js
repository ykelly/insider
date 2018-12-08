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
        <div>
          <AuthConsumer >
            {({ isAuth, login, logout }) => (
              <div className="community">
                <h3><Link to="/">Home</Link></h3>
                {isAuth ? (
                  <div>
                    <Link to="/post">Logged in</Link>
                    <button onClick={logout}>logout</button>
                  </div>
                ) : (
                  <button onClick={login}>Login</button>
                )}
              </div>
            )}
          </AuthConsumer>
        </div>
        // <Link to="/post"><button>Post</button></Link>
        <Articles articles = {this.state.articles} />
        <Footer />
      </div>
    )
  }
}

export default Community;
