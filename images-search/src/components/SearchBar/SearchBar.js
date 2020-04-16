import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.searchSubmit(this.state.term);
  };

  style = {
    background: "#4b9dc4",
    textalign: "center"
  };

  render() {
    return (
      <div className="ui segment" style={this.style}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Images Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              placeholder="Enter any item like Birds, Food, Flowers to see the magic ..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
