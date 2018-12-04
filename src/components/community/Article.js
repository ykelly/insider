import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      text: "",
      date: ""
    };
  }

  render(){
    return (
      <div>
        <li key={this.props.item.id}>
          <h3>{this.props.item.title}</h3>
          <h4>{this.props.item.author}</h4>
          <p>{this.props.item.text}</p>
          <p>{this.props.item.date.toString()}</p>
        </li>
      </div>
    );
  }
}

export default Article;
