import React from 'react'
import Coins from '../Coins'

const CoinList = ({ coins }) => {
  if (coins.length > 0) {
    return (
      <div>
        {coins.map(coin => {
          return (
            <Coins
              key={coin.id}
              id={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketCap={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className="no-data">
      <p>No data found</p>
    </div>
  )
}

export default CoinList
