import React, { Component } from 'react';
import fire from "./fire"
import './App.css';
import "react-bulma-components/full";
import 'font-awesome/css/font-awesome.min.css';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN = "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA"

class App extends Component {

  constructor(props: Props) {
    super(props);

    this.state = {
        viewport: {
            latitude: 47.6053202,
            longitude: -122.3381718,
            zoom: 12,
            width: 950,
            height: 1200,
        },
        messages: [] }; // <- set up react state
  }

  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }
  addMessage(e) {
      e.preventDefault(); // <- prevent form submit from reloading the page
      /* Send the message to Firebase */
      fire.database().ref('messages').push(this.inputEl.value);
      this.inputEl.value = ''; // <- clear the input
  }

  render() {
      const { lng, lat, zoom} = this.state;
      return (
          <div>
              <div>
                  <nav className="navbar is-light is-fixed-top has-shadow">
                      <div className="navbar-brand">
                          <a className="navbar-item">
                              <strong>Airbnb Insider</strong>
                          </a>
                          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                              <span></span>
                              <span></span>
                              <span></span>
                          </div>
                      </div>
                      <div className="navbar-menu is-right">
                          <div className="navbar-start">
                          </div>
                          <div className="navbar-end">
                              <div className="navbar-item">
                                  <div className="field is-grouped">
                                      <a className="navbar-item">
                                          Home
                                      </a>
                                      <a className="navbar-item">
                                          Search
                                      </a>
                                      <a className="navbar-item">
                                          About
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </nav>
              </div>

              <div className="columns" id="columns">
                  <div className="column is-2" id="column-one">
                      {/*First column*/}
                  </div>
                  <div className="column is-4" id="column-two">
                      {/*Second column*/}
                  </div>
                  <div className="column is-6 noSelect" id="column-three">
                      {/*Third column*/}
                      <ReactMapGL {...this.state.viewport}
                                  onViewportChange={(viewport) => this.setState({viewport})}
                                  mapStyle={'mapbox://styles/mapbox/streets-v9'}
                                  mapboxApiAccessToken={TOKEN}>
                      </ReactMapGL>
                  </div>
              </div>

              <div>
                  <nav className="navbar is-transparent is-dark is-fixed-bottom has-shadow">
                      <div className="navbar-brand">
                          <a className="navbar-item">
                              <strong>Airbnb Insider</strong>
                          </a>
                          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                              <span></span>
                              <span></span>
                              <span></span>
                          </div>
                      </div>
                      <div className="navbar-menu is-right">
                          <div className="navbar-start">
                          </div>

                          <div className="navbar-end">
                              <div className="navbar-item">
                                  <div className="field is-grouped">
                                      <div className="control">
                                          <a className="icons">
                                              <i className="fa fa-facebook"></i>
                                          </a>
                                          <a className="icons">
                                              <i className="fa fa-instagram"></i>
                                          </a>
                                          <a className="icons">
                                              <i className="fa fa-twitter"></i>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </nav>
              </div>
          </div>
      )
  }

  //Rock's firebase work
  // render() {
  //   return (
  //     <form onSubmit={this.addMessage.bind(this)}>
  //       <input type="text" ref={ el => this.inputEl = el }/>
  //       <input type="submit"/>
  //       <ul>
  //         { /* Render the list of messages */
  //           this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
  //         }
  //       </ul>
  //     </form>
  //   );
  // }


  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
}

export default App;
