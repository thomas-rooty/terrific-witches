import styles from './who.module.css'
import WhoContent from '@/components/sections/who/content/WhoContent'
import WhoHeader from '@/components/sections/who/header/WhoHeader'

const Who = () => {
  return (
    <div className={styles.container}>
      <WhoHeader />
      <WhoContent />
    </div>
  )
}

export default Who
