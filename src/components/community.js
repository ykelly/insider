import React from 'react';
import { Link } from 'react-router-dom';
import Header from './community/Header';
import Footer from './community/Footer';
import Articles from './community/Articles';
import Post from './community/post'
import fire from './fire';
import { AuthConsumer } from './AuthContext.js';
import '.././App.css';

const Modal = ({ children, closeModal, modalState, title }) => {
    if(!modalState) {
        return null;
    }
    return(
        <div className="modal is-active">
            <div className="modal-background" onClick={closeModal} />
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{title}</p>

                    <button className="delete" onClick={closeModal} />
                </header>
                <section className="modal-card-body">
                    <div className="content">
                        {children}
                    </div>
                </section>
            </div>
        </div>
    );
}

// Modal.propTypes = {
//     closeModal: React.PropTypes.func.isRequired,
//     modalState: React.PropTypes.bool.isRequired,
//     title: React.PropTypes.string
// }

class Community extends React.Component {
  constructor(){
    super();
    this.state = {
      articles:[], modalState: false
    };

    this.toggleModal = this.toggleModal.bind(this);

  }

    toggleModal() {
        this.setState((prev, props) => {
            const newState = !prev.modalState;

            return { modalState: newState };
        });
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
          date: items[item].date,
          like: items[item].like,
          dislike: items[item].dislike
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
          <div id="community-page">
              <section className="section" id="top-section">
                  <div className="container">
                      <div className="has-text-centered content">
                          <div id="community-icon">
                              <img src={require("./../images/conversation.png")}
                                   height="50px"
                                   width="50px"/>
                          </div>
                          <h1 className="title has-text-black">The Insider Community</h1>
                          <hr />
                          <AuthConsumer>
                              {({ isAuth, login, logout }) => (
                                  <div id="make-post">
                                      {isAuth ? (
                                    <span>
                                      <a className="button is-link" onClick={this.toggleModal}>
                                        <span className="icon">
                                            <i className="fa fa-plus"></i>
                                        </span>
                                          <span>Create Post</span>
                                      </a>
                                    </span>
                                    ) : (
                                    <span>
                                      <a className="button is-light" title="Disabled button" onClick={logout} disabled>
                                        <span className="icon">
                                            <i className="fa fa-sign-out"></i>
                                        </span>
                                          <span>Sign In to Make a Post</span>
                                      </a>
                                    </span>
                                    )}
                                  </div>
                            )}
                          </AuthConsumer>
                      </div>

                      <Modal
                          id="modal"
                          closeModal={this.toggleModal}
                          modalState={this.state.modalState}
                          title="Post a new review"
                      >
                        <Post></Post>
                      </Modal>
                  </div>
              </section>

            <section className = "section" id="bottom-section">
               <Articles className = "container" articles = {this.state.articles} />
            </section>
          </div>
        <Footer />
      </div>
    )
  }
}

export default Community;
