import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Banner from "./components/Banner";
import Header from "./components/Header";
import cards from "./cards.json";
// import './App.css';

const headerText = ["Clicky Game", "", "Score:  ", "| Top Score: "];
const bannerText = [
  "Clicky Game!",
  "Click on an image to earn points, but don't click on any more than once!"
];

var trackCards = [];
var score = 0;
var topscore = 0;
var message = "Click an image to begin!";
var alert="alert alert-primary"
class App extends Component {
  state = {
    cards,
    score,
    topscore,
    message,
    alert,
    trackCards
  };

  trackCard = (id, name) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const cards = this.state.cards.filter(card => card.id !== id);
    if (trackCards.includes(id)) {
      if (score > topscore) {
        topscore = score;
      }
      message = "You already clicked " + name + ". Try again!";
      alert = "alert alert-danger";
      score = 0;
      trackCards = [];
      this.setState({ trackCards, score, topscore, message, alert });
    } else {
      trackCards.push(id);
      score++;
      message = "You clicked " + name;
      alert = "alert alert-success";
      // Set this.state.friends equal to the new friends array
      this.setState({ trackCards, score, topscore, message, alert });
    }
    this.setState.cards = this.randomCards(cards);
  };

  randomCards = array => {
    const _array = array.slice(0);
    for (let i = 0; i < array.length - 1; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = _array[i];
      _array[i] = _array[randomIndex];
      _array[randomIndex] = temp;
    }
    return _array;
  };

  render() {
    return (
      <div>
        <Header
          message={this.state.message}
          score={this.state.score}
          topscore={this.state.topscore}
          alert={this.state.alert}
        >
          {headerText}
        </Header>
        <Banner>{bannerText}</Banner>
        {this.state.cards.map(card => (
          <MemoryCard
            trackCard={this.trackCard}
            id={card.id}
            key={card.id}
            image={card.image}
            name={card.name}
          />
        ))}
      </div>
    );
  }
}

export default App;
