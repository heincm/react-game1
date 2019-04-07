import React, { Component } from 'react';
import Wrapper from './Components/Wrapper'
import AvengerCard from './Components/AvengerCard'
import avengers from './avengers.json'

class App extends Component {

  state = {
    avengers
  }

  render() {
    return (
      <Wrapper>
        {this.state.avengers.map(avenger => (
          <AvengerCard
            removeFriend={this.removeFriend}
            id={avenger.id}
            key={avenger.id}
            name={avenger.name}
            image={avenger.image}
            whatever={avenger.whatever}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
