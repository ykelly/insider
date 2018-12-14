import {fromJS} from 'immutable';
import React from 'react';

const MAP_STYLE = "https://api.mapbox.com/styles/v1/mapbox/streets-v10?access_token=pk.eyJ1IjoicndhbmcyIiwiYSI6ImNqajJ3a21hbzExZ3EzcXBnc2puNTRudWkifQ.EtOfYQEh_v4rQ0q71LAqWQ";
var style = [];

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

getJSON(MAP_STYLE,
function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    style = data;
    console.log(style);
    console.log(data);
  }
});
  // .catch((error) => {
  //   console.log(error);
  // })
// class MapS extends React.Component {
//   constructor() {
//     this.state = {
//       style: []
//     }
//   }
//
//   componentDidMount() {
//     fetch(MAP_STYLE)
//       .then((response) => response.json())
//       .then((responseJson) => {
//         this.state.style = responseJson
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }
//
//   render() {
//     return(
//       {style = this.state.style;}
//     )
//   }
// }

// function getJson() {
//   fetch(MAP_STYLE)
//     .then((response) => response.json())
//     .then((responseJson) => {
//       var ls = responseJson.map()
//       return responseJson;
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// }
//
// const style = getJson();
// console.log(style);
// const stylesClient = MAP_STYLE({ accessToken: 'pk.eyJ1IjoicndhbmcyIiwiYSI6ImNqajJ3a21hbzExZ3EzcXBnc2puNTRudWkifQ.EtOfYQEh_v4rQ0q71LAqWQ'});
//
// var style = {};

// stylesClient
//     .getStyle({
//         styleId: 'Seattle - New'
//     })
//     .send()
//     .then(response => {
//         style = response.body;
//     });
console.log(style);
// Make a copy of the map style
const mapStyle = {...style,
                  sources: {...style.sources},
                  layers: style.layers.slice()
                 };


mapStyle.layers.splice(
  mapStyle.layers.findIndex(layer => layer.id === 'listing-num'), 1,

  // Filtered listings
  {
    id: 'listings-filtered',
    type: 'circle',
    'source-layer': 'listing-num',
    filter: ['==', 'GUESTS', '']
  }
);

export const filterLayerIndex =
  mapStyle.layers.findIndex(layer => layer.id === 'listings-filtered');

export const defaultMapStyle = mapStyle;
