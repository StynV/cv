'use client'

import { motion, useAnimationControls } from 'framer-motion'
import styles from './index.module.scss'

const AnimationControls = () => {
    const flipControls = useAnimationControls()

    const handleClick = () => {
        flipControls.start('flip')
    }

    return (
        <div className={styles.main}>
            <motion.button
                onClick={handleClick}
                className={styles.btn}
            >
                Flip it!
            </motion.button>
            <motion.div
                variants={{
                    initial: {
                        rotate: '0deg'
                    },
                    flip: {
                        rotate: '360deg'
                    }
                }}
                // whileHover='flip'
                initial="initial"
                animate={flipControls}
                className={styles.innerDiv} />
        </div>
    )
}

export default AnimationControls