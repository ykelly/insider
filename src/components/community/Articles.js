import React from 'react';
import Article from './Article';

class Articles extends React.Component {
  render() {
    return(
      <div>
        <ul>
          {
            this.props.articles.map((item) => {
              return(
                <Article item = {item}/>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default Articles;