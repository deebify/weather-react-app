import React, { Component } from 'react';
import SearchBar from './containers/search_bar'
class App extends Component {
  render() {
    return (
      <div>
        <h1>React App</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
