import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/UrbanInfoLabLogo.png" alt="Urban Information Lab Logo" className={styles.logo} />
        <img src="/HumanCenteredRoboticsLogo.png" alt="Netlify Logo" className={styles.logo} />
        <img src="/UTLogo.svg" alt="Netlify Logo" className={styles.logo} />
      </footer>
    </>
  )
}
