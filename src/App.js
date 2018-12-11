import React, { Component } from 'react';
import fire from "./components/fire"
import './App.css';
import "react-bulma-components/full";
import 'font-awesome/css/font-awesome.min.css';
import MapGL, {Marker, Popup, NavigationControl, StaticMap} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Header from './components/community/Header'
import Footer from './components/community/Footer'

const TOKEN = 'pk.eyJ1IjoicndhbmcyIiwiYSI6ImNqajJ3a21hbzExZ3EzcXBnc2puNTRudWkifQ.EtOfYQEh_v4rQ0q71LAqWQ'

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

   const apartment = event.features && event.features.find(f => f.layer.id === 'listings-percent');
   if (apartment) {
     hoverInfo = {
       lngLat: event.lngLat,
       properties: apartment.properties
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
         <div>{hoverInfo.properties.neighbourhood}</div>
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
            <div className="column is-2" id="column-one"></div>

            <div className="column is-6 noSelect" id="column-three">
                <MapGL {...this.state.viewport}
                    width="100vw"
                    height="100vh"
                    onViewportChange={this._updateViewport}
                    mapStyle={'mapbox://styles/rwang2/cjooll5t33iyn2ro8jvlhzhr5'}
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
