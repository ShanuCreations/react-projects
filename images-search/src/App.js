import React from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageList from "./components/ImageList/ImageList";

class App extends React.Component {
  state = { images: [] };

  //Fetch images from Unsplash using Axios
  onSearchSubmit = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID Ao2KDJCUYyHZBA5jrPMZmdDo4V-eFzjsrWOPblNyjhc"
      }
    });

    this.setState({ images: response.data.results });
  };

  //Render SearchBar and ImageList Components
  render() {
    return (
      <div className="ui container" style={{ marginTop: "40px" }}>
        <SearchBar searchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
