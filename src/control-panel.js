import React, {PureComponent} from 'react';

const camelPattern = /(^|[A-Z])[a-z]*/g;
const defaultContainer =  ({children}) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {

  _formatSettingName(name) {
    return name.match(camelPattern).join(' ');
  }

  _renderCheckbox(name, value) {
    return (
      <div key={name} className="input">
        <label>{this._formatSettingName(name)}</label>
        <input type="checkbox" checked={value}
          onChange={evt => this.props.onChange(name, evt.target.checked)} />
      </div>
    );
  }

  _renderNumericInput(name, value) {
    return (
      <div key={name} className="input">
        <label>{this._formatSettingName(name)}</label>
        <input type="number" value={value}
          onChange={evt => this.props.onChange(name, Number(evt.target.value))} />
      </div>
    );
  }

  _renderSetting(name, value) {
    switch (typeof value) {
    case 'boolean':
      return this._renderCheckbox(name, value);
    case 'number':
      return this._renderNumericInput(name, value);
    default:
      return null;
    }
  }

  render() {
    const Container = this.props.containerComponent || defaultContainer;
    const {settings} = this.props;

    return (
      <Container>
        <hr />

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


        { Object.keys(settings).map(name => this._renderSetting(name, settings[name]))}
        {console.log(Object.keys(settings))}
        {console.log(settings[Object.keys(settings)[1]])}
        {/*


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
            </p>
        </div>

        */}

        <hr />

      </Container>
    );
  }
}
