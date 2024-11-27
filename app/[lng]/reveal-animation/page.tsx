import Reveal from '@/components/poc/Reveal/Reveal'

import styles from './page.module.scss'

export default function RevealAnimation() {
  return (
    <main className={styles.main}>
      <Reveal>
        <h1>Hey I&apos;m Styn</h1>
      </Reveal>
    </main>
  )
}
