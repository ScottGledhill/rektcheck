import React, { Component } from 'react'
import * as api from '../api'
import '../App.css'
import ShowListings from '../components/ShowListings'

class DashboardContainer extends Component {
  state = {
    ticker: [],
    loaded: false,
    query: '',
    searchResult: []
  }

componentDidMount() {
  // console.log('componentDidMount, calling api.getTicker from DashboardContainer...')
  api.getTicker()
  .then((response) => {
    this.setState({
      ticker: Object.values(response) //converting object into array
    })
    this.tickerSort()
  })
}

tickerSort() { 
  let tickerData = this.state.ticker[0] //this is an object
  if (tickerData) {
    let tickerArray = Object.values(tickerData) //create array
    tickerArray = tickerArray.sort(function(a, b) {
      return a.rank - b.rank
    })
    this.setState({
      ticker: tickerArray,
      loaded: true
    })
  }
}

handleSearchbarInputChange = (event) => {
  this.setState({
    query: this.search.value
  })
  let value = this.state.query
  let list = this.state.ticker.slice()
  let result = list.filter((item)=>{
    let nameLowerCase = item.name.toLowerCase()
    let symLowerCase = item.symbol.toLowerCase()
    let symbol = symLowerCase.search(value.toLowerCase()) !== -1
    let name = nameLowerCase.search(value.toLowerCase()) !== -1
    return name || symbol ? true : false
  });
  this.setState({searchResult: result})
}

render() {
  return (
    <div>
    {this.state.loaded === true ? 
      <div>
        <form>
          <input 
            className={'searchBar'}
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleSearchbarInputChange}
          />
        </form>
        <div className="DashboardContainer">
          <header className="DashboardContainer-header">
            <h1>REKTCHECK</h1>
          </header>
          <p className="DashboardContainer-intro"></p>
          <ShowListings
            ticker={this.state.ticker}
            searchResult={this.state.searchResult}
            query={this.state.query}
          />
        </div>
      </div>
      :
      <div className="body"></div>
    }
    </div>
  )}
}
export default DashboardContainer;