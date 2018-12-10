import React, { Component } from 'react';
import fire from "./components/fire"
import './App.css';
import "react-bulma-components/full";
import 'font-awesome/css/font-awesome.min.css';
import ReactMapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import CityPin from './city-pin';
import CityInfo from './city-info';
import 'mapbox-gl/dist/mapbox-gl.css';
import Header from './components/community/Header'
import Footer from './components/community/Footer'

import CITIES from './data/cities.json';
import LISTINGS from './data/listings.json';

const TOKEN = 'pk.eyJ1IjoicndhbmcyIiwiYSI6ImNqajJ3a21hbzExZ3EzcXBnc2puNTRudWkifQ.EtOfYQEh_v4rQ0q71LAqWQ'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        viewport: {
            // latitude: 47.6053202,
            // longitude: -122.3381718,
            // zoom: 12,
            latitude: 47.6049,
            longitude: -122.3299,
            zoom: 15.09,
            width: "100vw",
            height: "100vh",
            bearing: 0,
            pitch: 0
        },
        popupInfo: null,
        messages: [] }; // <- set up react state
  }

  _updateViewport = (viewport) => {
      this.setState({viewport});
  }

  _renderCityMarker = (listing, index) => {
      return (
          <Marker
              key={`marker-${index}`}
              longitude={listing.longitude}
              latitude={listing.latitude} >
              <CityPin size={20} onClick={() => this.setState({popupInfo: listing})} />
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
          <div className="body">

              <Header/>
              <div className="columns" id="columns">
                  <div className="column is-2" id="column-one">
                      {/*First column*/}
                  </div>
                  {/*<div className="column is-4" id="column-two">*/}
                      {/*/!*Second column*!/*/}
                  {/*</div>*/}
                  <div className="column is-6 noSelect" id="column-three">
                      {/*Third column*/}
                      <ReactMapGL {...this.state.viewport}
                                  onViewportChange={this._updateViewport}
                                  mapStyle={'mapbox://styles/rwang2/cjooll5t33iyn2ro8jvlhzhr5'}
                                  mapboxApiAccessToken={TOKEN}>

                          { LISTINGS.map(this._renderCityMarker) }

                          {this._renderPopup()}

                          <div className="nav" style={{position: "absolute", top: 100, left: 50}}>
                              <NavigationControl onViewportChange={this._updateViewport}/>
                          </div>

                      </ReactMapGL>
                  </div>
              </div>
              <Footer/>

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
