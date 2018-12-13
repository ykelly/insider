import {fromJS} from 'immutable';

// Make a copy of the map style
const mapStyle = {'mapbox://styles/rwang2/cjpj682np42vh2rr6zz04eddu'};

// Insert custom layers before city labels
mapStyle.layers.splice(
  mapStyle.layers.findIndex(layer => layer.id === 'place_label_city'), 0,
  // Counties polygons
  {
    id: 'counties',
    interactive: true,
    type: 'fill',
    source: 'counties',
    'source-layer': 'original',
    paint: {
      'fill-outline-color': 'rgba(0,0,0,0.1)',
      'fill-color': 'rgba(0,0,0,0.1)'
    }
  },
  // Highlighted county polygons
  {
    id: 'counties-highlighted',
    type: 'fill',
    source: 'counties',
    'source-layer': 'original',
    paint: {
      'fill-outline-color': '#484896',
      'fill-color': '#6e599f',
      'fill-opacity': 0.75
    },
    filter: ['in', 'COUNTY', '']
  }
);

export const highlightLayerIndex =
  mapStyle.layers.findIndex(layer => layer.id === 'counties-highlighted');

export const defaultMapStyle = mapStyle;