import React, { Component } from 'react'
import DisplayCrypto from './DisplayCrypto'

class ShowListings extends Component {
  render() {
    return (
      <div>
        <h2>Top Crypto Currencies</h2>
        {this.props.searchResult.length === 0 || this.props.query === '' ?
          <DisplayCrypto list={this.props.ticker}/>
          :
          <DisplayCrypto list={this.props.searchResult}/>
        }
    </div>
    )
  }   
}
export default ShowListings