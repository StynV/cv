'use client'

import { motion, MotionConfig } from 'framer-motion'
import styles from './index.module.scss'

const Gestures = () => (
  <div className={styles.main}>
    <MotionConfig
      transition={{
        duration: 0.125,
        ease: 'easeInOut',
      }}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{
          scale: 0.95,
          rotate: '2.5deg',
        }}
        className={styles.btn}
      >
        Click me!
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{
          scale: 0.95,
          rotate: '2.5deg',
        }}
        className={styles.btn}
        style={{ backgroundColor: 'red' }}
      >
        Click me!
      </motion.button>
    </MotionConfig>
  </div>
)

export default Gestures
