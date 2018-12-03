import React, { Component } from 'react';
import fire from "./components/fire"
import './App.css';
import "react-bulma-components/full";
import 'font-awesome/css/font-awesome.min.css';
import ReactMapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import CityPin from './city-pin';
import CityInfo from './city-info';
import 'mapbox-gl/dist/mapbox-gl.css';

import CITIES from './data/cities.json';

// const TOKEN = "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA"
const TOKEN = 'pk.eyJ1IjoicndhbmcyIiwiYSI6ImNqajJ3a21hbzExZ3EzcXBnc2puNTRudWkifQ.EtOfYQEh_v4rQ0q71LAqWQ'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        viewport: {
            // latitude: 47.6053202,
            // longitude: -122.3381718,
            // zoom: 12,
            latitude: 37.785164,
            longitude: -100,
            zoom: 12.09,
            width: 950,
            height: 1200,
            bearing: 0,
            pitch: 0
        },
        popupInfo: null,
        messages: [] }; // <- set up react state
  }

  _updateViewport = (viewport) => {
      this.setState({viewport});
  }

  _renderCityMarker = (city, index) => {
      return (
          <Marker
              key={`marker-${index}`}
              longitude={city.longitude}
              latitude={city.latitude} >
              <CityPin size={20} onClick={() => this.setState({popupInfo: city})} />
          </Marker>
      );
  }

  _renderPopup() {
      const {popupInfo} = this.state;

      return popupInfo && (
          <Popup tipSize={5}
                 anchor="top"
                 longitude={popupInfo.longitude}
                 latitude={popupInfo.latitude}
                 closeOnClick={false}
                 onClose={() => this.setState({popupInfo: null})} >
              <CityInfo info={popupInfo} />
          </Popup>
      );
  }

  render() {
      const {viewport} = this.state;
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
                                  onViewportChange={this._updateViewport}
                                  mapStyle={'mapbox://styles/rwang2/cjooll5t33iyn2ro8jvlhzhr5'}
                                  // 'mapbox://styles/mapbox/streets-v9'
                                  mapboxApiAccessToken={TOKEN}>

                          { CITIES.map(this._renderCityMarker) }

                          {this._renderPopup()}

                          <div className="nav" style={{position: "absolute", top: 100, left: 50}}>
                              <NavigationControl onViewportChange={this._updateViewport}/>
                          </div>

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
}

export default App;
