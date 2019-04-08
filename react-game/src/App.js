import React, { Component } from 'react';
import Wrapper from './Components/Wrapper'
import AvengerCard from './Components/AvengerCard'
import Navbar from './Components/Navbar'
import avengers from './avengers.json'

class App extends Component {

  state = {
    avengers: this.shuffle(avengers),
    score: 0,
    highScore: 0,
    isClicked: []
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  handleOnClick = (event) => {
    let currentImage = event.target.alt
    this.setState({ isClicked: this.state.isClicked.concat(currentImage), count: this.state.count + 1 });
    this.setState({ avengers: this.shuffle(avengers) })
    this.alreadyClicked(currentImage)
  }

  alreadyClicked = (image) => {
    if (this.state.isClicked.includes(image)) {
      console.log('already there, bruh')
      return this.gameOver()
    }
    this.setState({score: this.state.score + 1})
  }

  gameOver() {
    this.setState({score: 0})
    this.setState({isClicked: []})
  }

  render() {
    return (
      <>
        <Navbar 
        count={this.state.score} 
        highScore={this.state.highScore}/>
        <Wrapper>
          {this.state.avengers.map(avenger => (
            <AvengerCard
              id={avenger.id}
              key={avenger.id}
              name={avenger.name}
              image={avenger.image}
              handleOnClick={this.handleOnClick}
              clicked={avenger.clicked} />
          ))}
        </Wrapper>
      </>
    );
  }
}

export default App;
