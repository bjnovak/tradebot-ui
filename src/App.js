import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

axios({
  method:'get',
  url:'/test'
}).then(function(response) {
  console.log(response);
});

class App extends Component {
  render() {
    return (
      <div className="">
      </div>
    );
  }
}

export default App;