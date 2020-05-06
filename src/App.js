import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TabMenu from './components/TabMenu';

const items = [
  {
    src: 'https://cdn.glitch.com/4d609a83-9e0e-4c5e-afab-6fa7d8a7edd5%2Fhome.svg?v=1588772222400',
    title: 'Home',
  },
  {
    src: 'https://cdn.glitch.com/4d609a83-9e0e-4c5e-afab-6fa7d8a7edd5%2Fchristmas-presents.svg?v=1588772222659',
    title: 'Deal',
  },
  {
    src: 'https://cdn.glitch.com/4d609a83-9e0e-4c5e-afab-6fa7d8a7edd5%2Fmultimedia%20(2).svg?v=1588781800108',
    title: 'Upload',
  },
  {
    src: 'https://cdn.glitch.com/4d609a83-9e0e-4c5e-afab-6fa7d8a7edd5%2Ffood-and-restaurant.svg?v=1588772223809',
    title: 'Work',
  },
  {
    src: 'https://cdn.glitch.com/4d609a83-9e0e-4c5e-afab-6fa7d8a7edd5%2Ftools-and-utensils.svg?v=1588782005776',
    title: 'Settings',
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabMenu items={items}/>
      </div>
    );
  }
}

export default App;
