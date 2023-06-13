import styles from './whocontent.module.css'

const WhoContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column1}>
        <div className={styles.pfpContainer}>
          <img className={styles.pfp} src="/images/pfp_elise.png" alt="pfp" />
          <span className={styles.title}>Propriétaire</span>
        </div>
      </div>
      <div className={styles.column2}>
        <p className={styles.paragraph}>
          Au sein d'une famille de sorciers renommés, Elise a hérité d'un puissant héritage magique. Cependant, elle se distingue de certains de ses prédécesseurs en refusant de
          succomber à la tentation du pouvoir. Guidée par une éthique inébranlable, elle croit fermement que la magie doit être utilisée exclusivement pour le bien et le bien-être
          de tous les êtres vivants. <br /><br />
          En tant que sorcière cosmique, Elise est en étroite communion avec les forces de l'univers. Elle canalise ses pouvoirs pour guérir les blessures, apaiser les conflits et
          élever les âmes. Dotée d'un charisme naturel et d'une grande empathie, elle tisse des liens profonds avec les autres, créant ainsi une communauté solidaire et unie autour
          d'elle.
        </p>
      </div>
      <div className={styles.column3}>
        <div className={styles.cauldronContainer}>
          <img src="/images/cauldron.png" alt="Cauldron stats" />
        </div>
      </div>
    </div>
  )
}

export default WhoContent
