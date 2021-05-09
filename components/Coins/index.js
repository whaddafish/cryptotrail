import styles from './Coins.module.css'

const Coins = (props) => {
  const {
    name,
    price,
    id,
    symbol,
    marketCap,
    volume,
    image,
    priceChange
  } = props

  return (
    <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.coin}>
            <img
              src={image}
              alt={name}
              className={styles.image}
            />
            <h1 className={styles.h1}>{name}</h1>
            <p className={styles.symbol}>{symbol}</p>
          </div>
          <div className={styles.data}>
            <p className={styles.price}>${price}</p>
            <p className={styles.volume}>{volume}</p>
            {priceChange < 0 ? (
              <p className={styles.coin_percent, styles.red}>
                {priceChange.toFixed(2)}%
              </p>
            ) : (
              <p className={styles.coin_percent, styles.green}>
                {priceChange.toFixed(2)}%
              </p>
            )}
            <p className={styles.marketCap}>Mkt Cap: {marketCap.toFixed(2)}</p>
          </div>
        </div>
    </div>
  )
}

export default Coins
