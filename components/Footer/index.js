import styles from './Footer.module.css'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p>Developed by:
        <Link
          href="https://www.linkedin.com/in/manishbsta/">
          <a 
          target="_blank"
          className={styles.developer}>
            {' '} Manish Bista
            </a>
        </Link>
      </p>
    </footer>
  )
}

export default Footer
