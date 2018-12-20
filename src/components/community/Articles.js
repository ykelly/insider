import React from 'react';
import Article from './Article';

class Articles extends React.Component {
  render() {
    return(
      <div id="card-list">
        <section class="section cards">
            <div className="container">
                <div className="columns is-multiline">
                        {
                            this.props.articles.reverse().map((item) => {
                                return(
                                    <Article item = {item}/>
                                )
                            })
                        }
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Articles;
