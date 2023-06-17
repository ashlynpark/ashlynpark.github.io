import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main} style={{ backgroundImage: `url("/bgimagedark.png")` }}>
      <div className={styles.headercontainer}>
        <h1 className={styles.headerletter}>E</h1>
        <h1 className={styles.headertitle}>ll's info dot com</h1>
      </div>
    </main>
  )
}
