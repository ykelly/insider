import React from 'react';
import '.././../App.css';
import 'font-awesome/css/font-awesome.min.css';
import "react-bulma-components/full";



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
                      <a className="icons">
                        <i className="fa fa-thumbs-up"></i>
                      </a>
                    </span>
                  </p>
                  <p className="card-footer-item">
                    <span>
                      <a className="icons">
                        <i className="fa fa-thumbs-down"></i>
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
