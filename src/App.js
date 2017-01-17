import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import './App.css';
import Card from './Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCard1: false,
      showCard2: false,
      showCard3: false
    };
  }

  onLeave = () => {
    console.log('leave');
  };

  onEnter = () => {
    console.log('enter');
  };

  render() {
    const { showCard1, showCard2, showCard3 } = this.state;
    return (
      <div className="app cards">
        <h1 style={{ marginBottom: 300 }}>Keep Scrolling, Keep Scrolling</h1>

        <Waypoint
          bottomOffset={200}
          onEnter={() => this.setState({ showCard1: true })}
          onLeave={({ viewportTop, waypointTop }) => {
            console.log(viewportTop, waypointTop);
            if (waypointTop >= 0)
              this.setState({ showCard1: false })
          }}/>
        <Card cardClassName="yellowCard" hide={!showCard1}/>

        <Waypoint
          bottomOffset={200}
          onEnter={() => this.setState({ showCard2: true })}
          onLeave={({ viewportTop, waypointTop }) => {
            if (waypointTop > viewportTop)
              this.setState({ showCard2: false })
          }}/>
        <Card cardClassName="blueCard" hide={!showCard2} reverseDirection/>

        <Waypoint
          bottomOffset={200}
          onEnter={() => this.setState({ showCard3: true })}
          onLeave={({ viewportTop, waypointTop }) => {
            if (waypointTop > viewportTop)
              this.setState({ showCard3: false })
          }}/>
        <Card cardClassName="coralCard" hide={!showCard3}/>
      </div>
    );
  }
}

export default App;
