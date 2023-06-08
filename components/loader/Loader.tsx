import styles from './Loader.module.css'

interface LoaderProps {
  activeClass: boolean
}

const Loader = ({ activeClass }: LoaderProps) => {
  return (
    <div className={`${styles.loader} ${activeClass ? styles.fadeOut : ''}`}>
      <img src={'/icons/wand_loading.gif'} className={styles.wand} alt="Loading..." />
      <h3 className={styles.loading}>NETTOYAGE DU MANOIR EN COURS...</h3>
    </div>
  )
}

export default Loader
