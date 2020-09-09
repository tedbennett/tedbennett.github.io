import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { moo: '' };

  // Fetch moo after first mount
  componentDidMount() {
    this.getMoo();
  }

  getMoo = () => {
    // Get the moo and store them in state
    fetch('/api/cow')
      .then(res => res.text())
      .then(moo => this.setState({ moo }));
  };

  render() {
    const { moo } = this.state;

    return (
      <div className="App">
        {/* Render the moo if we have them */}
        {moo.length ? (
          <div>
            <h1>1 Cow.</h1>
            <h2>{moo}</h2>
          </div>
        ) : (
            // Render a helpful message otherwise
            <div>
              <h1>No moo :(</h1>
            </div>
          )}
      </div>
    );
  }
}

export default App;
