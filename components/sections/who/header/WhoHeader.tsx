import { useState } from 'react'
import styles from './whoheader.module.css'

const WhoHeader = () => {
  const [activeLink, setActiveLink] = useState('QUI SOMMES-NOUS')

  return (
    <nav className={styles.whoheader}>
      <div className={styles.wholinks}>
        <div className={`${styles.wholink} ${activeLink === 'QUI SOMMES-NOUS' ? styles.active : ''}`}>QUI SOMMES-NOUS ?</div>
      </div>
    </nav>
  )
}

export default WhoHeader
