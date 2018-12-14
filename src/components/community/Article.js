import React from 'react';
import '.././../App.css';
import 'font-awesome/css/font-awesome.min.css';
import "react-bulma-components/full";
import fire from "../fire";



class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      text: "",
      date: "",
      like: parseInt(""),
      dislike: parseInt(""),
    };
  }

    like = (e) => {
        const likes = parseInt(this.props.item.like) + 1
        const id = this.props.item.id
        const ref = "Articles/" + id + "/like/"

        fire.database().ref().update({
            [ref]: likes
        });
    }

    dislike = (e) => {
        const dislikes = parseInt(this.props.item.dislike) + 1
        const id = this.props.item.id
        const ref = "Articles/" + id + "/dislike/"

        fire.database().ref().update({
            [ref]: dislikes
        });
    }

  render(){
    return (
      <div class="column is-one-quarter">
          <div className="card">
              <div className="card-content">
                  <p className="title">
                      {this.props.item.text}
                  </p>
                  <p className="subtitle">
                      {this.props.item.author}
                  </p>
                  <p className="subtitle is-6">
                      {this.props.item.date}
                  </p>
              </div>
              <footer className="card-footer">
                  <p className="card-footer-item">
                    <span>
                      <a name="like" className="icons like-dislike" id="like" onClick={e=>this.like(e)}>
                          {parseInt(this.props.item.like)} <i className="fa fa-thumbs-up"></i>
                      </a>
                    </span>
                  </p>
                  <p className="card-footer-item">
                    <span>
                      <a className="icons like-dislike" id="dislike" onClick={e=>this.dislike(e)}>
                          {parseInt(this.props.item.dislike)} <i className="fa fa-thumbs-down"></i>
                      </a>
                    </span>
                  </p>
              </footer>
          </div>
        <br/>
      </div>


    );
  }
}

export default Article;
