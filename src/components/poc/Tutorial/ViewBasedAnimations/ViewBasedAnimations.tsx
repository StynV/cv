'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import styles from './index.module.scss'

const ViewBasedAnimations = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <div className={styles.main} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.innerDiv}
      />
      <div
        ref={ref}
        className={styles.secondDiv}
        style={{
          background: isInView ? 'blue' : 'red',
        }}
      />
    </>
  )
}

export default ViewBasedAnimations
