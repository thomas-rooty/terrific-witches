'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [dividerWidth, setDividerWidth] = useState(0)

  useEffect(() => {
    setDividerWidth(200)
  }, [])

  return (
    <nav className={styles.navbar}>
      <img src={'/images/logo_nobg.png'} alt="Terrific Witches Logo" className={styles.logoImage} />
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>TERRIFIC</h1>
        <div className={styles.divider} style={{ width: `${dividerWidth}%` }} />
        <h1 className={styles.logo}>WITCHES</h1>
      </div>
    </nav>
  )
}

export default Navbar
