import React, { Component } from 'react';
import fire from "./components/fire"
import './App.css';
import "react-bulma-components/full";
import 'font-awesome/css/font-awesome.min.css';
import MapGL, {Marker, Popup, NavigationControl, StaticMap} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Header from './components/community/Header'
import Footer from './components/community/Footer'
import ControlPanel from './control-panel';
import {defaultMapStyle, filterLayerIndex} from './map-style.js';
import {fromJS} from 'immutable';

const TOKEN = 'pk.eyJ1IjoicndhbmcyIiwiYSI6ImNqajJ3a21hbzExZ3EzcXBnc2puNTRudWkifQ.EtOfYQEh_v4rQ0q71LAqWQ';
const MAP_STYLE = 'mapbox://styles/rwang2/cjpj682np42vh2rr6zz04eddu';
// const minLat = 47.45;
// const maxLat = 47.75;
// const minLong = -122.3;
// const maxLong = -122.1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mapStyle: defaultMapStyle,
        viewport: {
            latitude: 47.6049,
            longitude: -122.3299,
            zoom: 12.09,
            bearing: 0,
            pitch: 30
        },
        hoverInfo: null,
        settings: {
          neighborhood: '',
          minPrice: 0,
          maxPrice: 5400,
          listingType: null,
          zipcode: 55105,
          numGuests: 1,

        }
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
 _onSettingChange = (name, value) => {

   this.setState({
      settings: {...this.state.settings, [name]: value},
      mapStyle: defaultMapStyle.setIn(['layers', filterLayerIndex, 'filter', 2], this.state.settings.numGuests)
    });
    console.log("the setting state for guest: ",this.state.settings.numGuests);
    console.log("the defaultMapStyle: ",defaultMapStyle.toJS());
    console.log("filterLayerIndex:",filterLayerIndex);
 }

  render() {
      const {viewport} = this.state;
      return (
          <div className="body">

              <Header/>
              <div className="columns" id="columns">
                  <div className="column is-2" id="column-one">
                  <ControlPanel
                  containerComponent={this.props.containerComponent}
                  settings={this.state.settings}
                  onChange={this._onSettingChange}
                    />
                  </div>

                  <div className="column is-6 noSelect" id="column-three">
                      <MapGL {...this.state.viewport}
                                  onViewportChange={this._updateViewport}
                                  width="100vw"
                                  height="100vh"
                                  mapStyle={MAP_STYLE}
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
