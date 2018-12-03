import React from 'react';
import fire from '../fire';

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
    const itemsRef = fire.database().ref('Articles');
    const item = {
      title: this.state.title,
      author: this.state.author,
      text: this.state.text,
      date: Date.now()
    }

    itemsRef.push(item);
    this.setState({
      title: '',
      author: '',
      text: '',
      date: ''
    })
  }

  render() {
    return(
      <div className = "submission-form">
        <form>
          <label>
            Title:
            <input
            name = "title"
            placeholder = "Title"
            value = {this.state.title}
            onChange={e => this.change(e)}
            />
          </label>
          <br/>

          <label>
            Author:
            <input
            name = "author"
            placeholder = "Author"
            value = {this.state.author}
            onChange={e => this.change(e)}
            />
          </label>

          <br/>

          <label>
            Comments:
            <textarea
              name = "text"
              value = {this.state.text}
              onChange = {e => this.change(e)}
            />
          </label>

          <button onClick={(e) => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Post;
