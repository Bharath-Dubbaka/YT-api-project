import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: "",
  };
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
    // console.log(this.state);
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log("after submit - state of child", this.state);
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            {/* <div className="ui input focus"> */}
            <label>Video Search: </label>
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              type="text"
              //   name="videosearch"
              placeholder="Search..."
            />
            {/* </div> */}
          </div>
        </form>
      </div>
    );
  }
}
