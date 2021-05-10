import styles from './Footer.module.css'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p>A product of {' '} 
        <Link
          href="https://www.femtobeast.com/">
          <a
            target="_blank"
            className={styles.developer}>
            Femtobeast
            </a>
        </Link>
      </p>
    </footer>
  )
}

export default Footer
