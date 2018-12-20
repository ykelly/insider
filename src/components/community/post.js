import React from 'react';
import { Redirect } from 'react-router-dom';
import fire from '../fire';
import "react-bulma-components/full";
import 'font-awesome/css/font-awesome.min.css';
import '.././../App.css';
import Autosuggest from 'react-autosuggest';
import Listings from '../../data/listings.json'

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : Listings.filter(lang =>
        lang.descry.toLowerCase().slice(0, inputLength) === inputValue
    );
};

const getSuggestionValue = suggestion => suggestion.descry;

const renderSuggestion = suggestion => (
    <span>{suggestion.descry}</span>
);

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      text: "",
      date: "",
      submitted: false,
      like: "0",
      dislike: "0",
      value: '',
      suggestions: []
    };
  }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue,
            title: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.title);
    const itemsRef = fire.database().ref('Articles');
    const item = {
      title: this.state.title,
      author: this.state.author,
      text: this.state.text,
      date: new Date().toLocaleString(),
      like: this.state.like,
      dislike: this.state.dislike
    }

    itemsRef.push(item);
    this.setState({
      title: '',
      author: '',
      text: '',
      date: '',
      like: "0",
      dislike: "0",
      submitted: true
    })
  }

  render() {
      const { value, suggestions } = this.state;
      const inputProps = {
          placeholder: 'Enter a listing',
          value,
          onChange: this.onChange
      };
      if (this.state.submitted === true) {
      window.location.reload()
    }

    return(
      <div className = "submission-form">
        <form id="form">
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Listing</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <Autosuggest
                                suggestions={suggestions}
                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                getSuggestionValue={getSuggestionValue}
                                renderSuggestion={renderSuggestion}
                                inputProps={inputProps}
                                onChange={e => this.change(e)}
                                value = {this.state.title}
                                type="text"
                                name = "title"
                            />
                            {/*<input className="input"*/}
                                   {/*type="text"*/}
                                   {/*name = "title"*/}
                                   {/*placeholder = "Title"*/}
                                   {/*value = {this.state.title}*/}
                                   {/*onChange={e => this.change(e)}*/}
                            {/*/>*/}
                        </div>
                    </div>
                </div>
            </div>

          <br/>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Author</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input className="input"
                                   type="text"
                                   name = "author"
                                   placeholder = "Author"
                                   value = {this.state.author}
                                   onChange={e => this.change(e)}/>
                        </div>
                    </div>
                </div>
            </div>

          <br/>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Review</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <textarea className="textarea"
                                      placeholder="What are your thoughts on this location?"
                                      name="text"
                                      onChange={e=>this.change(e)}
                                      value={this.state.text} ></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div className="field-body">
                <div className="field">
                    <div className="control" id="submit-form-button">
                        <button className="button is-link" onClick={(e) => this.onSubmit(e)}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>

        </form>
      </div>
    );
  }
}

export default Post;
