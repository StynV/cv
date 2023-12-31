import { useTranslation } from 'next-i18next'
import styles from './block.module.scss'
import { ReactNode } from 'react'
import YGWYS from '@/components/YGWYS/YGWYS'

const Block = ({ title, period, children }: { title: string, period?: string, children: ReactNode }) => (
  <article className={styles.block}>
    <div className={styles.squareBlock}>
      <div className={styles.square}></div>
      <div className={styles.line}>
        <div className={styles.squareLeft}></div>
        <div className={styles.squareRight}></div>
      </div>
    </div>

    <div className={styles.textBlock}>
      <div className={styles.blockHeader}>
        <YGWYS html={title} className={styles.title} />
        {period && <h3 className={styles.period}>{period}</h3>}
      </div>
      {children}
    </div>
  </article>
)

export default Block