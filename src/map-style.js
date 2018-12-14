import {fromJS} from 'immutable';
import React from 'react';

const MAP_STYLE = "https://api.mapbox.com/styles/v1/mapbox/streets-v10?access_token=pk.eyJ1IjoicndhbmcyIiwiYSI6ImNqajJ3a21hbzExZ3EzcXBnc2puNTRudWkifQ.EtOfYQEh_v4rQ0q71LAqWQ";
var style = [];

// async function fetchData(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// }
//
// fetchData(MAP_STYLE)
//   .then(data => {
//     console.log(data);
//     style = data;
//     console.log(style)
//   })
//
// console.log(style);
// fetch(MAP_STYLE)
//       .then((response) => response.json())
//       .then((responseJson) => {
//
//
//       });
var request = new XMLHttpRequest();
request.open('GET',MAP_STYLE,false);
request.send(null);

if(request.status === 200) {
  console.log(request.responseText);
}

style=JSON.parse(request.responseText);
console.log(style);
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
