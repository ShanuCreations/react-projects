import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.searchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment search-bar" style={{ background: "#4b9dc4" }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Images Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              placeholder="Enter any word like Birds, Food, Flowers to see the magic ..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
