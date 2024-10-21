'use client'

import { ReactNode } from 'react'
import YGWYS from '@/components/YGWYS/YGWYS'
import { useInView } from 'react-intersection-observer'
import styles from './block.module.scss'

const Block = ({ title, period, children }: { title: string, period?: string, children: ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0, // Adjust as needed
  })

  return (
    <article
      className={`${styles.block} ${inView ? styles.inView : styles.notInView}`}
      ref={ref}
      itemScope
      itemType='https://schema.org/Article'
    >
      <>
        <meta itemProp='datePublished' content='2023-10-15' />
        <meta itemProp='dateModified' content='2024-02-03' />
        <meta itemProp='publisher' content='https://www.linkedin.com/in/styn-vercauteren-96918018b/' />

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
      </>
    </article>
  )
}

export default Block