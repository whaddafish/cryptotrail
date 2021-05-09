import { useState } from 'react'
import CoinList from '../components/CoinList.js'
import Searchbar from '../components/Searchbar'

export default function Home({ coins }) {
  const [search, setSearch] = useState('')

  const allCoins = coins.filter(coin =>
    coin.name
      .toLowerCase()
      .includes(
        search.toLocaleLowerCase())
  )

  const handleSearch = (e) => {
    e.preventDefault()

    setSearch(e.target.value)
  }

  return (
    <div className="app_container">
      <Searchbar
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
      <CoinList coins={allCoins} />
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
  const data = await response.json()

  return {
    props: {
      coins: data
    }
  }
}