import React, { Component } from 'react';
import './App.css';
import DashboardContainer from './container/DashboardContainer'

class App extends Component {
  render() {
    return (
      <div className={'background'}>
        <DashboardContainer />
      </div>
    );
  }
}
export default App;