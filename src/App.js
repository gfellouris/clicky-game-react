import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Banner from "./components/Banner";
import Header from "./components/Header";
import cards from "./cards.json";
// import './App.css';

const headerText = [
  "Clicky Game",
  "Click an image to begin!",
  "Score: 0 | Top Score: "
];
const bannerText = [
  "Clicky Game!",
  "Click on an image to earn points, but don't click on any more than once!"
];

var trackCards = [];
var score = 0;
var topscore = 0;
class App extends Component {
  state = {
    cards,
    score,
    topscore,
    trackCards
  };

  trackCard = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const cards = this.state.cards.filter(card => card.id !== id);
    trackCards.push(id);
    score++;
    // Set this.state.friends equal to the new friends array
    this.setState({ trackCards, score });
    console.log(trackCards);
    console.log(`score = ${this.state.score}`);
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
        <Header score={this.state.score}>{headerText}</Header>
        <Banner>{bannerText}</Banner>
        {this.state.cards.map(card => (
          <MemoryCard
            trackCard={this.trackCard}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </div>
    );
  }
}

export default App;
