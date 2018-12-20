import {fromJS} from 'immutable';
import React from 'react';

const MAP_STYLE = "https://api.mapbox.com/styles/v1/mapbox/streets-v10?access_token=pk.eyJ1IjoicndhbmcyIiwiYSI6ImNqajJ3a21hbzExZ3EzcXBnc2puNTRudWkifQ.EtOfYQEh_v4rQ0q71LAqWQ";
var style = [];

var request = new XMLHttpRequest();
request.open('GET',MAP_STYLE,false);
request.send(null);

if(request.status === 200) {
  // console.log(request.responseText);
}

style=JSON.parse(request.responseText);
console.log("the style file:",style);
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
    filter: ['==', 'GUESTS', '1']
  }
);

export const filterLayerIndex =
  mapStyle.layers.findIndex(layer => layer.id === 'listings-filtered');

export const defaultMapStyle = fromJS(mapStyle);
