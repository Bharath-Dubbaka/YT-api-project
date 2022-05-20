// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return <div className="App">Learn React</div>;
// }

// export default App;
import youtube from "./apis/youtube";
import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onTermSubmit("youtube");
  }

  onTermSubmit = async (term) => {
    // console.log(term, "After callback from child");
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    // console.log(video, "From the AppJs component");
    this.setState({ selectedVideo: video });
    // console.log(this.state);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "25px" }}>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        {/* Search Results: {this.state.videos.length} Videos */}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
