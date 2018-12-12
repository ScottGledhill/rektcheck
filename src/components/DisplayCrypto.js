import React from 'react'

const DisplayCrypto = (props) => (
  props.list.map( (coin, index) =>
  <div key={index} className={coin.quotes.USD.percent_change_24h > 5 ? "lambo"
  : coin.quotes.USD.percent_change_24h < -5 ? "rekt" : coin.quotes.USD.percent_change_24h < 0 ? "down" : "up" }>
    <h1>
      {coin.name}
    </h1>
    <div>
      ${coin.quotes.USD.price.toFixed(2)}
    </div>
    <div>
      Rank: {coin.rank}
    </div>
    <div>
      Symbol: {coin.symbol}
    </div>
    <div>
      1h Change: {coin.quotes.USD.percent_change_1h}%
    </div>
    <div>
      24h Change: {coin.quotes.USD.percent_change_24h}%
    </div>
  </div>
  )
)

export default DisplayCrypto