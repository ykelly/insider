import React, { Component } from 'react';
import fire from "./components/fire"
import './App.css';
import "react-bulma-components/full";
import 'font-awesome/css/font-awesome.min.css';
import MapGL, {Marker, Popup, NavigationControl, StaticMap} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Header from './components/community/Header'
import Footer from './components/community/Footer'

const TOKEN = 'pk.eyJ1IjoicndhbmcyIiwiYSI6ImNqajJ3a21hbzExZ3EzcXBnc2puNTRudWkifQ.EtOfYQEh_v4rQ0q71LAqWQ';
// const minLat = 47.45;
// const maxLat = 47.75;
// const minLong = -122.3;
// const maxLong = -122.1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        viewport: {
            latitude: 47.6049,
            longitude: -122.3299,
            zoom: 12.09,
            bearing: 0,
            pitch: 0,
        },
        hoverInfo: null
      }; // <- set up react state
      this._renderPopup = this._renderPopup.bind(this);
  }

  _updateViewport = (viewport) => {
      this.setState({viewport});
  }

  _onHover = event => {
   let hoverInfo = null;

   const listing = event.features && event.features.find(f => f.layer.id === 'listing-num');
   const nbhd = event.features && event.features.find(f => f.layer.id === 'seattle-neighbourhood');
   if (listing) {
     hoverInfo = {
       lngLat: event.lngLat,
       properties1: listing.properties,
       properties2: nbhd.properties
     };
   }
   this.setState({
     hoverInfo: hoverInfo
   });
 };

  _renderPopup() {
   const {hoverInfo} = this.state;

   if (hoverInfo) {
     return (
       <Popup longitude={hoverInfo.lngLat[0]} latitude={hoverInfo.lngLat[1]} closeButton={false}>
         <div>Price: ${hoverInfo.properties1.PRICE}/night</div>
         <div>Neighborhood: {hoverInfo.properties2.NBHD}</div>
         <div>Median home value: ${hoverInfo.properties2.MED_H_VAL}</div>
         <div><a href = {hoverInfo.properties1.URL}>Listing URL</a></div>
       </Popup>
     );
   }
   return null;
 }

  render() {
      const {viewport} = this.state;
      return (
          <div className="body">

              <Header/>
              <div className="columns" id="columns">
                  <div className="column is-2" id="column-one">
                      <div id="search">
                          <p className="is-size-2 is-uppercase has-text-weight-bold">Search</p>
                      </div>
                      <div id="first-search-text">
                          <p className="is-size-6 has-text-weight-bold">Neighborhood</p>
                      </div>
                      <div className="control has-icons-left" id="first-filter">
                          <div className="select is-rounded">
                              <select>
                                  <option>Select neighborhood</option>
                                  <option>Add neighborhood</option>
                              </select>
                          </div>
                          <span className="icon is-left">
                              <i className="fa fa-map"></i>
                          </span>
                      </div>
                      <div id="search-text">
                          <p className="is-size-6 has-text-weight-bold">Zip Code</p>
                      </div>
                      <div className="field" id="zipcode">
                          <p className="control has-icons-left has-icons-right">
                              <input className="input" type="text" placeholder="Enter zip code"/>
                              <span className="icon is-small is-left">
                                  <i className="fa fa-map-pin"></i>
                              </span>
                          </p>
                      </div>
                      <div id="search-text">
                          <p className="is-size-6 has-text-weight-bold">Price Range</p>
                      </div>
                      <div className="field" id="zipcode">
                          <p className="control has-icons-left has-icons-right">
                              <input className="input" type="text" placeholder="From"/>
                              <span className="icon is-small is-left">
                                  <i className="fa fa-dollar"></i>
                              </span>
                          </p>
                      </div>
                      <div className="field" id="zipcode">
                          <p className="control has-icons-left has-icons-right">
                              <input className="input" type="text" placeholder="To"/>
                              <span className="icon is-small is-left">
                                  <i className="fa fa-dollar"></i>
                              </span>
                          </p>
                      </div>
                      <div id="search-text">
                          <p className="is-size-6 has-text-weight-bold">Listing Type</p>
                      </div>
                      <div className="control has-icons-left" id="first-filter">
                          <div className="select is-rounded">
                              <select>
                                  <option>Select Listing Type</option>
                                  <option>Add listing type</option>
                              </select>
                          </div>
                          <span className="icon is-left">
                              <i className="fa fa-home"></i>
                          </span>
                      </div>
                      <div id="search-text">
                          <p className="is-size-6 has-text-weight-bold">Guests</p>
                      </div>
                      <div className="control has-icons-left" id="first-filter">
                          <div className="select is-rounded">
                              <select>
                                  <option>Number of guests</option>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5+</option>

                              </select>
                          </div>
                          <span className="icon is-left">
                              <i className="fa fa-user"></i>
                          </span>
                      </div>
                      <div id="map-info">
                          <p className="is-size-6 has-text-weight-bold">Map Legend</p>
                          <p className="is-size-6 has-text-grey" id="map-info-text">
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                              Only showing listings for Seattle.
                          </p>
                      </div>
                  </div>

                  <div className="column is-6 noSelect" id="column-three">
                      <MapGL {...this.state.viewport}
                                  onViewportChange={this._updateViewport}
                                  width="100vw"
                                  height="100vh"
                                  mapStyle={'mapbox://styles/rwang2/cjpj682np42vh2rr6zz04eddu'}
                                  mapboxApiAccessToken={TOKEN}
                                  onClick = {this._onHover}
                                  >

                          { this._renderPopup() }

                          <div className="nav" style={{position: "absolute", top: 100, left: 50}}>
                              <NavigationControl onViewportChange={this._updateViewport}/>
                          </div>

                      </MapGL>
                  </div>
              </div>
              <Footer/>

          </div>
      )
  }
}

export default App;
