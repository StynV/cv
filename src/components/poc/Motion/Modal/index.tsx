'use client'

import { motion } from 'framer-motion'
import Backdrop from '../Backdrop'
import styles from './index.module.scss'

const Modal = ({ handleClose, text }: { handleClose: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>, text: string,  }) => {
    const dropIn = {
        hidden: {
            y: '-20vh',
            opacity: 0
        },
        visible: {
            y: '0',
            opacity: 1,
            transition: {
                duration: 1,
                type: 'spring',
                damping: 25,
                stiffness: 500
            }
        },
        exit: {
            y: '20vh',
            opacity: 0
        }
    }

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className={styles.modal}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <button onClick={handleClose} className={styles.btn}>Close</button>

                <div className={styles.content}>
                    <p>{text}</p>
                </div>
            </motion.div>
        </Backdrop>
    )
}

export default Modal