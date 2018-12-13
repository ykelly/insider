import {fromJS} from 'immutable';
import {Window as URL} from "mapbox-gl";


const url = require('url');
const myURL =
    new URL("@mapbox://styles/rwang2/cjpj682np42vh2rr6zz04eddu");

const MAP_STYLE = require(myURL);
const stylesClient = MAP_STYLE({ accessToken: 'pk.eyJ1IjoicndhbmcyIiwiYSI6ImNqajJ3a21hbzExZ3EzcXBnc2puNTRudWkifQ.EtOfYQEh_v4rQ0q71LAqWQ'});
var style = {};

stylesClient
    .getStyle({
        styleId: 'Seattle - New'
    })
    .send()
    .then(response => {
        style = response.body;
    });

// Make a copy of the map style
const mapStyle = {...style,
                  sources: {...MAP_STYLE.sources},
                  layers: MAP_STYLE.layers.slice()
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