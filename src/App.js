import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: "Rafi Bettaieb",
      bio: "As a computer science student at the Higher Institute of Computer Science in Ariana (ISI), I am passionate about various technology-related fields, including competitive programming, artificial intelligence, and web development. My goal is to gain professional experience in these areas and to continuously develop my skills.",
      imgSrc: "https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww",
      profession: "Fullstack Developer "
    },
    shows: false,
    time: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, time } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <button className="toggle-button" onClick={this.toggleShow}>
            {shows ? "Hide Profile" : "Show Profile"}
          </button>
          {shows && (
            <div className="card">
              <img className="card-image" src={person.imgSrc} alt={person.fullName} />
              <div className="card-content">
                <h1 className="card-name">{person.fullName}</h1>
                <p className="card-bio">{person.bio}</p>
                <p className="card-profession">{person.profession}</p>
              </div>
            </div>
          )}
          <p className="mounted-time">Time since last component was mounted: {time} seconds</p>
        </header>
      </div>
    );
  }
}

export default App;
