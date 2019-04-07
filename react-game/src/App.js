import React, { Component } from 'react';
import Wrapper from './Components/Wrapper'
import AvengerCard from './Components/AvengerCard'
import Navbar from './Components/Navbar'
import avengers from './avengers.json'

class App extends Component {

  state = {
    avengers,
    count: 0,
    isClicked: false
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  handleOnClick = () => {
    this.setState({ isClicked: true, count: this.state.count + 1 });
    console.log(this.state.isClicked)
    console.log(this.state.count)
  }


  render() {
    return (
      <>
        <Navbar count={this.state.count}/>
        <Wrapper>
          {this.state.avengers.map(avenger => (
            <AvengerCard
              shuffle={this.shuffle}
              id={avenger.id}
              key={avenger.id}
              name={avenger.name}
              image={avenger.image}
              handleOnClick={this.handleOnClick} />
          ))}
        </Wrapper>
      </>
    );
  }
}

export default App;
