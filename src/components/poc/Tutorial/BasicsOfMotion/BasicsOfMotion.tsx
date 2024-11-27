'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './index.module.scss'

const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className={styles.main}>
      <motion.button
        //Makes the button slide down when the animation happens
        layout
        onClick={() => setIsVisible(!isVisible)}
        className={styles.btn}
      >
        Show / Hide
      </motion.button>

      <AnimatePresence
        //Removes div from the DOM before doing animation
        mode="popLayout"
      >
        {isVisible && (
          <motion.div
            initial={{
              rotate: '0deg',
              scale: 0,
              y: 0,
            }}
            //What animation will i use?
            animate={{
              rotate: '180deg',
              scale: 1,
              //Makes the button go down 50px via translateY
              // y: 50
              //start at 0, got to 150 down, then 150 up, stay for a sec, back down
              y: [0, 150, -150, -150, 0],
            }}
            //Define (CSS-)transitions
            transition={{
              duration: 1,
              // type: 'spring'
              ease: 'backInOut',
              //Value between 0-1 (1 = how long duration is)
              //must be same amount of items as animate
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            exit={{
              rotate: '0deg',
              scale: 0,
              y: 0,
            }}
            className={styles.innerDiv}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BasicsOfMotion
