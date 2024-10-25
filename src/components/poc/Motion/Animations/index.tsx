'use client'

import { AnimatePresence, motion } from 'framer-motion'
import styles from './index.module.scss'
import { useState } from 'react'
import Modal from '../Modal'

const Animations = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={styles.btn}
        onClick={() => {
          modalOpen ? close() : open()
        }}
      >
        Launch modal
      </motion.button>

      <AnimatePresence initial={false} mode="wait">
        {modalOpen && <Modal text="This is my modal." handleClose={close} />}
      </AnimatePresence>
    </div>
  )
}

export default Animations
