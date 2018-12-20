import React, {PureComponent} from 'react';

const camelPattern = /(^|[A-Z])[a-z]*/g;
const defaultContainer =  ({children}) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {

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

        <hr />

      </Container>
    );
  }
}
