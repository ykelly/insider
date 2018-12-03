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
        This is an Article
      </div>
    );
  }
}

export default Article;
