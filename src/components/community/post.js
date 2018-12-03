import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      text: "",
      date: ""
    };
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return(
      <div className = "submission-form">
        <form>
          <input
          name = "title"
          placehold = "Title"
          value = {this.state.title}
          onChange={e => this.change(e)}
          />

          <input
          name = "author"
          placehold = "Author"
          value = {this.state.author}
          onChange={e => this.change(e)}
          />

          <textarea
            name = "text"
            value = {this.state.text}
            onChange = {e => this.change(e)}
          />

          <button onClick={(e) => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Post;
