import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {

  render() {
    const {info} = this.props;
    const room_type = `${info.room_type}`;
    const name = `${info.descry}`;


      return (
      <div>
        <div>
          {name}
          {/*| <a target="_new" href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}> Wikipedia </a>*/}
        </div>
        {/*<img width={240} src={info.image} />*/}
        {room_type}
      </div>
    );
  }
}
