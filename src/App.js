import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

axios({
  method:'get',
  url:'http://localhost:3777/test'
}).then(function (response) {
  console.log(response);
});

class App extends Component {

  start = () => {
    console.log('start');
    axios({
      method:'post',
      url:'http://localhost:3777/start'
    }).then(function (response) {
      console.log(response);
    });    
  };

  stop = () => {
    console.log('stop');
    axios({
      method:'post',
      url:'http://localhost:3777/stop'
    }).then(function (response) {
      console.log(response);
    });    
  };

  render() {
    return (
      <div className="">
        <h1>TradeBot</h1>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
      </div>
    );
  }
}

export default App;