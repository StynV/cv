import { useTranslation } from 'next-i18next'
import YGWYS from '../YGWYS/YGWYS'
import styles from './intro.module.scss'

const Intro = () => {
  const { t } = useTranslation('common')

  const html: string = t('intro2')

  return (
      <article className={styles.intro}>
        <p className={styles.text}>{t('intro1')}</p>
        <YGWYS html={html} className={styles.text} />
        <p className={styles.text}>{t('intro3')}</p>
      </article>
  )
}

export default Intro
