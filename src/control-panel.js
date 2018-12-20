import React, {PureComponent} from 'react';
import './App.css';

const camelPattern = /(^|[A-Z])[a-z]*/g;
const defaultContainer =  ({children}) => <div className="control-panel">{children}</div>;

const nbhdStyle1 = {
    'background-color': '#478906'
};
const nbhdStyle2 = {
    'background-color': '#70A43B'
};
const nbhdStyle3 = {
    'background-color': '#9FC479'
};
const nbhdStyle4 = {
    'background-color': '#C7DEAD'
};
const nbhdStyle5 = {
    'background-color': '#DBEBC7'
};

const listingStyle1 = {
    'background-color': '#FA9005'
};
const listingStyle2 = {
    'background-color': '#F79F2B'
};
const listingStyle3 = {
    'background-color': '#F2BD6F'
};
const listingStyle4 = {
    'background-color': '#F7D09F'
};
const listingStyle5 = {
    'background-color': '#F5E3CE'
};

export default class ControlPanel extends PureComponent {
  render() {
    const Container = this.props.containerComponent || defaultContainer;
    const {settings} = this.props;

    return (
      <Container>
        {/*<hr />*/}

        {/*{ Object.keys(settings).map(name => this._renderSetting(name, settings[name])) }*/}

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
        <div className="field" id="minPrice">
            <p className="control has-icons-left has-icons-right">
                <input className="input" type="text" placeholder="From" value={settings[Object.keys(settings)[1]]}
                onChange={evt => this.props.onChange(Object.keys(settings)[1], Number(evt.target.value))} />
                <span className="icon is-small is-left">
                    <i className="fa fa-dollar"></i>
                </span>
            </p>
        </div>
        <div className="field" id="maxPrice">
            <p className="control has-icons-left has-icons-right">
                <input className="input" type="text" placeholder="From" value={settings[Object.keys(settings)[2]]}
                onChange={evt => this.props.onChange(Object.keys(settings)[2], Number(evt.target.value))} />
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
                <select onChange={evt => this.props.onChange(Object.keys(settings)[5], Number(evt.target.value))}>
                    <option value="">Number of guests</option>
                    <option value="1" >1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                </select>
            </div>
            <span className="icon is-left">
                <i className="fa fa-user"></i>
            </span>
        </div>

       {/*Object.keys(settings).map(name => this._renderSetting(name, settings[name]))*/}
        <div id="map-info">
            <p className="is-size-6 has-text-weight-bold">Map Legend</p>
            <p className="is-size-6 has-text-grey" id="map-info-text">
                <div id = "nbhd_legend" class = "legend">
                    <h4>Median Home Value</h4>
                    <div><span style={nbhdStyle1}></span>$2,100,000</div>
                    <div><span style={nbhdStyle2}></span>$1,700,000</div>
                    <div><span style={nbhdStyle3}></span>$1,000,000</div>
                    <div><span style={nbhdStyle4}></span>$550,000</div>
                    <div><span style={nbhdStyle5}></span>$314,522</div>
                </div><br></br>
                <div id = "listings_legend" className = "legend">
                    <h4>Listing Price per Night</h4>
                    <div><span style={listingStyle1}></span>$5400</div>
                    <div><span style={listingStyle2}></span>$550</div>
                    <div><span style={listingStyle3}></span>$180</div>
                    <div><span style={listingStyle4}></span>$100</div>
                    <div><span style={listingStyle5}></span>$10</div>
                </div>
            </p>
        </div>

        <hr />

      </Container>
    );
  }
}
