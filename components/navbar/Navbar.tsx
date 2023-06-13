import { useState } from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('INFO')

  const handleLinkClick = (link: string) => {
    setActiveLink(link)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navlinks}>
        <div className={`${styles.navlink} ${activeLink === 'INFO' ? styles.active : ''}`} onClick={() => handleLinkClick('INFO')}>
          INFO
        </div>
        <div className={`${styles.navlink} ${activeLink === 'QUI SOMMES NOUS ?' ? styles.active : ''}`} onClick={() => handleLinkClick('QUI SOMMES NOUS ?')}>
          QUI SOMMES NOUS ?
        </div>
        <div className={`${styles.navlink} ${activeLink === 'NOUS REJOINDRE' ? styles.active : ''}`} onClick={() => handleLinkClick('NOUS REJOINDRE')}>
          NOUS REJOINDRE
        </div>
      </div>
    </nav>
  )
}

export default Navbar
