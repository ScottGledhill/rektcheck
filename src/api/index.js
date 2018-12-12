const baseUrl = 'https://api.coinmarketcap.com/v2'

export function getTicker() {
  console.log('0. calling getTicker...')
  return fetch(`${baseUrl}/ticker/`)
  .then( console.log('returning response.json()...') )
	.then( response => response.json() )
}
