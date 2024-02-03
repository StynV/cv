import Image from 'next/image'
import styles from './footer.module.scss'

const Footer = () => (
    <footer className={styles.footer}>
        <a
            href="https://github.com/StynV/cv"
            target="_blank"
            rel="noreferrer"
            itemProp='author'
        >
            <Image
                src={'/images/Github.png'}
                alt={'Source code'}
                width={80}
                height={80}
            />
        </a>
    </footer>
)

export default Footer
