import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear() }
  }

  render() {
    return (
      <footer>
        <ul>
          <li>
            &copy; {this.state.year} Rock, Daniel, Katya, Ruotong
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
