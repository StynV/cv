import sanitizeHtml from 'sanitize-html'
import styles from './ygwys.module.scss'

const YGWYS = ({ html, className }: { html: string, className?: string }) => (
    <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }} className={`${className} ${styles.ygwys}`} />
)

export default YGWYS